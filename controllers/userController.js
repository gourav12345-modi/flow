const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { join } = require('path');
const User = require('../models/user');
const profilePhotoGenerator = require('../helpers/profileGenerator');

const isValidPassword = (password) => password.trim();

// Register user
const register = (req, res, next) => {
  const backendBaseUrl = `${req.protocol}://${req.get('host')}`;

  // Getting data
  const { name, email, password } = req.body;

  // Check if the user already exist or not
  User.exists({ email })
    .then(async (user) => {
      // if user is already their in Database
      if (user) {
        return res
          .status(403)
          .json({ message: 'User with this email already exist' });
      }

      // Validation
      if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // generate a profile photo
      const photo = await profilePhotoGenerator(name);
      const photoName = `${name}-${new Date().toJSON().slice(0, 10)}-${(
        Math.random() * 1000000
      ).toFixed()}.svg`;
      fs.writeFile(
        join(process.cwd(), '/static/uploads/', photoName),
        photo.data,
        async (error) => {
          if (error) throw error;

          // hash password
          const hashedPassword = await bcrypt.hash(password, 10);

          const profilePhotoPath = `${backendBaseUrl}/${photoName}`;
          const newUser = new User({
            name,
            email,
            password: hashedPassword,
            profilePhoto: profilePhotoPath,
          });

          // save newUser
          newUser
            .save()
            .then((result) => {
              res.status(201).json({ message: 'User created' });
            })
            .catch((err) => {
              next(err);
            });
        },
      );
    })
    .catch((err) => {
      next(err);
    });
};

// User login
const login = (req, res, next) => {
  // Getting data
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // If user already registered or not
  User.findOne({ email })
    .then((user) => {
      // If their is user in Database
      if (user) {
        // checking password
        bcrypt
          .compare(password, user.password)
          .then((match) => {
            if (match) {
              // create accessToken
              const accessToken = jwt.sign(
                {
                  id: user._id,
                  name: user.name,
                  email: user.email,
                  profilePhoto: user.profilePhoto,
                },
                process.env.JWT_TOKEN_SECRET,
                { expiresIn: '50m' },
              );

              // create refreshToken
              const refreshToken = jwt.sign(
                {
                  id: user._id,
                },
                process.env.JWT_REFRESH_SECRET,
              );

              // save refreshToken
              user.refreshToken.push(refreshToken);
              user
                .save()
                .then((_result) => {
                  // httpOnly cookie for refreshToken with path '/refresh_token'
                  res.cookie('refreshToken', refreshToken, {
                    maxAge: 60 * 24 * 60 * 60 * 1000, // setting cookie for 60 days
                    httpOnly: true,
                    // samesite: 'lax',
                    // secure: true,
                    path: '/api/user',
                  });
                  // send res
                  return res.status(200).json({
                    accessToken,
                    name: user.name,
                    email,
                    profilePhoto: user.profilePhoto,
                  });
                })
                .catch((err) => next(err));
            } else {
              return res.status(401).json({ message: 'Wrong Credentials' });
            }
          })
          .catch((err) => {
            next(err);
          });
      } else {
        return res.status(401).json({ message: 'Wrong Credentials' });
      }
    })
    .catch((err) => next(err));
};

// user logout
const logout = (req, res, next) => {
  // get refreshToken
  const { refreshToken } = req.cookies;
  // clear cookie
  res.clearCookie('refreshToken', { path: 'api/user/refresh_token' });
  // remove refreshToken from Database
  User.updateOne(
    { refreshToken },
    {
      refreshToken: '',
    },
  )
    .then((user) => res.status(200).json({ message: 'Logged Out' }))
    .catch((err) => next(err));
};

// refreshToken route
const getToken = (req, res, next) => {
  const token = req.cookies.refreshToken;
  // if token is not in request
  if (!token) {
    return res
      .status(401)
      .json({ message: 'Token not found', accessToken: '' });
  }
  jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) {
      console.log(err.message);
      return res
        .status(403)
        .json({ message: 'Invalid token', accessToken: '' });
    }
    User.findOne({ _id: user.id })
      .then((result) => {
        if (result && result.refreshToken.includes(token)) {
          const accessToken = jwt.sign(
            {
              id: result._id,
              name: result.name,
              email: result.email,
              profilePhoto: result.profilePhoto,
            },
            process.env.JWT_TOKEN_SECRET,
            { expiresIn: '50m' },
          );

          // create refreshToken
          const refreshToken = jwt.sign(
            {
              id: result._id,
            },
            process.env.JWT_REFRESH_SECRET,
          );
          const index = result.refreshToken.indexOf(token);
          if (index > -1) {
            result.refreshToken.splice(index, 1);
          }
          result.refreshToken.push(refreshToken);
          result
            .save()
            .then(() => {
              // httpOnly cookie for refreshToken with path '/refresh_token'
              res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                path: '/api/user',
              });
              // send res
              return res.status(200).json({
                accessToken,
                email: result.email,
                name: result.name,
                profilePhoto: result.profilePhoto,
              });
            })
            .catch((err3) => {
              console.log(err3.message);
              res
                .status(500)
                .json({ message: 'Something went wrong', accessToken: '' });
            });
        } else {
          return res
            .status(403)
            .json({ message: 'Invalid token', accessToken: '' });
        }
      })
      .catch((err2) => {
        console.log(err2.message);
        res
          .status(500)
          .json({ message: 'Something went wrong', accessToken: '' });
      });
  });
};

const changePassword = async (req, res, next) => {
  const userId = req.user.id;
  const { existingPassword, newPassword, confirmPassword } = req.body;

  // check password is valid
  if (!isValidPassword(newPassword) || newPassword !== confirmPassword) { return res.status(400).json({ message: 'Password is invalid' }); }

  try {
    const user = await User.findOne({ _id: userId });
    if (!user) return res.status(404).json({ message: 'User not found' });
    const match = await bcrypt.compare(existingPassword, user.password);
    if (!match) return res.status(404).json({ message: 'Password is invalid' });
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({ message: 'Password Changed!' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  logout,
  getToken,
  changePassword,
};
