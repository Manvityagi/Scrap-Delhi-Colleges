const rp = require('request-promise');
const $  = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://collegedunia.com/btech/delhi-ncr-colleges?city_id=125';

rp(url)
  .then(function(html){
    //success!
    return potusParse(url);
    })
    .then(function(presidents) {
      // console.log(presidents);
      console.log(typeof(Object.keys(presidents.name)[0]));
      // console.log(typeof(presidents.name));
 
      const obj1 = presidents.name
      // console.log(Object.keys(obj1[0]));
      for(i = 0; i <=24; i++){
        console.log((obj1[i].attribs).title);
      }
    })
  .catch(function(err){
      console.log(err);
    //handle error
  });