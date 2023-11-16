const axios = require('axios');
const { URLSearchParams } = require('url');

require('dotenv').config();

let apikey = process.env.API_KEY
let appId = process.env.APP_ID
let templateId = "529c4c0d-bab9-4de7-b679-31107ca43488"

const encodedParams = new URLSearchParams();
encodedParams.set('content', 'Hello ! The status of {{1}} has been updated to {{2}}.');
encodedParams.set('example', 'Hello ! The status of [your delivery #230498] has been updated to [dispatched].');
encodedParams.set('category', 'UTILITY');
encodedParams.set('templateType', 'TEXT');

const options = {
  method: 'PUT',
  url: `https://api.gupshup.io/wa/app/${appId}/template/${templateId}`,
  headers: {
    apiKey: apikey,
    'content-type': 'application/x-www-form-urlencoded'
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