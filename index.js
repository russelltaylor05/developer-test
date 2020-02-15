'use strict';

const Bluebird  = require('bluebird');
const Cheerio   = require('cheerio');
const Request   = Bluebird.promisify(require('request'));

const BASE_URL = 'https://github.com/facebook';

async function getPage(url) {
  let response = await Request({
    url,
    method: "GET",
    headers: { 'Cache-Control': 'no-cache' },
    timeout: 10000
  })

  return response.body;
}

(async () => {

  console.log('Scrapping first page');
  let $ = Cheerio.load(await getPage(BASE_URL));
  
  let name = $('h1').text().trim();
  let url = $('ul a.text-gray-dark').attr('href').trim();
  let location = $('.has-location span').text().trim();

  let result = {
    name,
    url,
    location,
    repos: []
  }

  $('a[data-hovercard-type=repository]').toArray().forEach(el => {
    result.repos.push({ name: el.children[0].data.trim() });
  });

  let pageCount = Number($('.pagination .current').attr('data-total-pages'));
  if(pageCount && pageCount > 1) {
    for(let i = 2; i <= pageCount; i++) {
      console.log(`Scrapping page ${i}`);
      $ = Cheerio.load(await getPage(`${BASE_URL}?page=${i}`));
      $('a[data-hovercard-type=repository]').toArray().forEach(el => {
        result.repos.push({ name: el.children[0].data.trim() });
      });
    }
  }

  console.log(result);
  return result;

})()

