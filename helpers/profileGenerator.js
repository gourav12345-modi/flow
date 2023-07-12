const axios = require("axios");

const profilePhotoGenerator = (name) => {
  const url = `https://api.dicebear.com/6.x/thumbs/svg?seed=${name}&size=70`;
  return axios.get(url);
};

module.exports = profilePhotoGenerator;
