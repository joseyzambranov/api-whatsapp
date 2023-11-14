const axios = require('axios');
const { URLSearchParams } = require('url');

require('dotenv').config();

let apiName = process.env.API_NAME
let apikey = process.env.API_KEY

const encodedParams = new URLSearchParams();
encodedParams.set('user', '51953293108');

const options = {
  method: 'POST',
  url: `https://api.gupshup.io/sm/api/v1/app/opt/in/${apiName}`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    apikey: apikey
  },
  data: encodedParams,
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });