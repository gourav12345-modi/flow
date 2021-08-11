const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Register user
const register = (req, res, next) => {
  // Getting data
  const { name, email, password } = req.body;

  // Check if the user already exist or not
  User.exists({ email }).then(async (user) => {
    // if user is already their in Database
    if (user) {
      return res.status(403).json({ message: 'User with this email already exist' });
    }

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // save newUser
    newUser.save().then((result) => {
      res.status(201).json({ message: 'User created' });
    }).catch((err) => {
      next(err);
    });
  }).catch((err) => {
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
  User.findOne({ email }).then((user) => {
    // If their is user in Database
    if (user) {
      // checking password
      bcrypt.compare(password, user.password).then((match) => {
        if (match) {
          // create accessToken
          const accessToken = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email,
          }, process.env.JWT_TOKEN_SECRET, { expiresIn: '15m' });

          // create refreshToken
          const refreshToken = jwt.sign({
            id: user._id,
            name: user.name,
            email: user.email,
          }, process.env.JWT_REFRESH_SECRET);

          // save refreshToken
          user.refreshToken.push(refreshToken);
          user.save().then((_result) => {
            // httpOnly cookie for refreshToken with path '/refresh_token'
            console.log(refreshToken);
            res.cookie('refreshToken', refreshToken, {
              maxAge: 60 * 24 * 60 * 60 * 1000, // setting cookie for 60 days
              httpOnly: true,
              // samesite: 'lax',
              // secure: true,
              path: '/api/user/refreshToken',
            });
            // send res
            return res.status(200).json({
              accessToken,
              name: user.name,
              email,
            });
          }).catch((err) => next(err));
        } else {
          return res.status(401).json({ message: 'Wrong Credentials' });
        }
      }).catch((err) => {
        next(err);
      });
    } else {
      return res.status(401).json({ message: 'Wrong Credentials' });
    }
  }).catch((err) => next(err));
};

// user logout
const logout = (req, res, next) => {
  // get refreshToken
  console.log(req.cookies);
  const { refreshToken } = req.cookies;
  // clear cookie
  res.clearCookie('refreshToken', { path: 'api/user/refresh_token' });
  // remove refreshToken from Database
  User.updateOne({ refreshToken }, {
    refreshToken: '',
  }).then((user) => res.status(200).json({ message: 'Logged Out' }))
    .catch((err) => next(err));
};

// refreshToken route
const getToken = (req, res, next) => {
  console.log(req);
  const token = req.cookies.refreshToken;
  // if token is not in request
  if (!token) return res.status(401).json({ message: 'Token not found', accessToken: '' });
  jwt.verify(token, process.env.JWT_REFRESH_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token', accessToken: '' });
    User.findOne({ _id: user.id }).then((result) => {
      if (result && result.refreshToken.includes(token)) {
        const accessToken = jwt.sign({
          id: result._id,
          name: result.name,
          email: result.email,
        }, process.env.JWT_TOKEN_SECRET, { expiresIn: '15m' });

        // create refreshToken
        const refreshToken = jwt.sign({
          id: result._id,
          name: result.name,
          email: result.email,
        }, process.env.JWT_REFRESH_SECRET);

        result.refreshToken.push(refreshToken);
        result.save().then(() => {
          // httpOnly cookie for refreshToken with path '/refresh_token'
          res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            path: '/',
          });
          // send res
          return res.status(200).json({
            accessToken,
            email: result.email,
            name: result.name,
          });
        }).catch((err3) => {
          console.log(err3.message);
          res.status(500).json({ message: 'Something went wrong', accessToken: '' });
        });
      } else {
        return res.status(403).json({ message: 'Invalid token', accessToken: '' });
      }
    }).catch((err2) => {
      console.log(err2.message);
      res.status(500).json({ message: 'Something went wrong', accessToken: '' });
    });
  });
};

module.exports = {
  register,
  login,
  logout,
  getToken,
};
