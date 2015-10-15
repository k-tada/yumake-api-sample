var cronJob = require('cron').CronJob
  , job
;

exports.start = function(jobfn) {

    /**
     * 天気情報取得
     */
    job = new cronJob({
        cronTime : "00 05 5,11,17 * * *" /* everyday at 5:05, 11:05, 17:05 */,
        onTick : jobfn.getWeatherInfos,
        start : true,
        timeZone : "Asia/Tokyo"
    });
};
