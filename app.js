var express = require ('express')
  , yumake  = require ('./lib/yumake_api')
  , cron    = require ('./lib/cron')
  , app     = express()
;

// Cron開始
console.log('-- Cron Start --');
cron.start({
  getWeatherInfos: function() {
    console.log('-- cron job --');
    yumake.get(36).then(function(body) {
      // API戻り値
      console.log(body);
    });
  }
});

app.get('/', function(req, res) {
  yumake.get(req.query.code).then(function(body) {
    res.send(body);
  });
});

app.listen(3000);

