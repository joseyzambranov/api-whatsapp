const axios = require('axios');
const { URLSearchParams } = require('url');
require('dotenv').config();

let apikey = process.env.API_KEY

const encodedParams = new URLSearchParams();
encodedParams.append('source', '51954331133');
encodedParams.append('destination', '51953293108');
encodedParams.append('template', JSON.stringify({"id": "7ad70d9b-e27a-45ea-b90c-dd30cc46d98d","params": ["your delivery #230498","dispatched"]})); // Debes convertir el objeto a una cadena JSON


const options = {
  method: 'POST',
  url: 'http://api.gupshup.io/sm/api/v1/template/msg',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'apikey': apikey
  },
  data: encodedParams,
};

//console.log({options})

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });