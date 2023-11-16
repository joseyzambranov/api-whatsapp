const axios = require('axios');
require('dotenv').config();

let appId = process.env.APP_ID;
let partnerToken = process.env.PARTNER_TOKEN;
let gupshupData;

const options = {
  method: 'GET',
  url: `https://partner.gupshup.io/partner/app/${appId}/ratings`,
  headers: { token: partnerToken }
};

axios
  .request(options)
  .then(function (response) {
    //gupshupData = response.data;

    gupshupData =     {
        "currentLimit": "TIER_10K",
        "event": "UPGRADE",
        "eventTime": 1640944847609,
        "oldLimit": "TIER_1K"
    }
      console.log(gupshupData);
    let color = '';

    switch (gupshupData.event) {
        case 'UPGRADE':
          color = 'GREEN';
          break;
        case 'DOWNGRADE':
          color = 'YELLOW';
          break;
        case 'FLAGGED':
          color = 'RED';
          break;
          case 'UNFLAGGED':
            color = 'YELLOW';
            break;  
        default:
          color = 'GREEN';
      }
  
    console.log('(QUALITY:', color, ')');
  })
  .catch(function (error) {
    console.error(error);
  });
