var qs = require ('querystring')

exports.build = function (base, params) {
  return [base, qs.stringify(params)].join('?');
};

