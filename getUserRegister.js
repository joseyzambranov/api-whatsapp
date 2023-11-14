const axios = require('axios');
require('dotenv').config();


let apiName = process.env.API_NAME
let apikey = process.env.API_KEY
const options = {
  method: 'GET',
  url: `https://api.gupshup.io/sm/api/v1/users/${apiName}`,
  headers: {apikey: apikey}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });