var request = require ('request')
  , url     = require ('./util/url')
;

exports.get = function(code) {
  if ( ! code) {
    throw new Error('no code specified');
  }

  var params = {
        code: code
      , key: process.env.API_KEY
      , format: 'json'
    }
    , base = 'http://api.yumake.jp/1.1/forecastPref.php'
  ;

  return new Promise(function (resolve) {
    request.get(url.build(base, params), function(err, res, body) {
      var body = JSON.parse(body);
      if (body.status != "success") {
        throw new Error('API call failed');
      }

      resolve(body.area.map(function(area) {
        return {
            areaCode: area.areaCode
          , areaName: area.areaName
          , whether: area.weather[0]
          , isRainy: area.weather[0].includes("雨")
        };
      }));
    });
  });
};
