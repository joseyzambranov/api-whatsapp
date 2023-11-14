const axios = require('axios');
const { URLSearchParams } = require('url');
require('dotenv').config();

let apiName = process.env.API_NAME
let apikey = process.env.API_KEY

const encodedParams = new URLSearchParams();
encodedParams.set('message', '{"type":"text","text":"Hello user, Api test hello world number 2"}');
encodedParams.set('channel', 'whatsapp');
encodedParams.set('source', '917834811114');
encodedParams.set('destination', '51953293108');
encodedParams.set('src.name', apiName);
encodedParams.set('disablePreview', 'false');
encodedParams.set('encode', 'true');

const options = {
  method: 'POST',
  url: 'https://api.gupshup.io/sm/api/v1/msg',
  headers: {
    accept: 'application/json',
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