const request = require('request');
const cheerio = require('cheerio');

var player = require('play-sound')((opts = {}));
counter = 1;
setInterval(() => {
  const options = {
    method: 'GET',
    url: 'https://www.dzrt.com/ar/highland-berries.html',
    headers: {
      Cookie:
        'PHPSESSID=am4md6ud9pd7cl9em11pm8nq1q; SERVERCORSID=fadede1407ead0f0f0bc7a14f61d778a|1721897641|1721897641; SERVERID=fadede1407ead0f0f0bc7a14f61d778a|1721897641|1721897641',
    },
  };
  request(options, function (error, response) {
    if (error) return new Error(error);
    const $ = cheerio.load(response.body);
    res = $('div')
      .get()
      .map((x) => $(x).attr('class'));
    console.log(res[84] + ' ' + 'attempt' + ' ' + counter++);
    res[84] != 'stock unavailable' && res[84] != undefined
      ? player.play('../dzzrt.wav', () => {})
      : null;
  });
}, 5000);
