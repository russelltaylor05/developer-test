'use strict';

const Bluebird  = require('bluebird');
const Cheerio   = require('cheerio');
const Request   = Bluebird.promisify(require('request'));

(async () => {

  let response = await Request({
    url: 'https://github.com/facebook',
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  })
  
  console.log(response.statusCode);

  let $ = Cheerio.load(response.body);
  
  let h1 = $('h1').text().trim();

  console.log(h1);

  // Your Code Here!

})()

