const url = 'https://collegedunia.com/btech/delhi-ncr-colleges?city_id=125';
const rp = require('request-promise');
const cheerio = require('cheerio');


const potusParse = function(url) {
  return rp(url)
    .then(function(html) {
        //console.log(html)
        const $ = cheerio.load(html)
        imgs: $('.top-block > img')
        // console.log(typeof(imgs))
      return {
        name: $('.top-block > img')
      };
    })
    .catch(function(err) {
      //handle error
      console.log(err);
    });
};

potusParse(url);
module.exports = potusParse;
