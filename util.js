// util.js

var util = {};

util.parseError = function(errors) {
  var parsed = {};
  if(errors.name == 'ValidationError') {
    for(var name in errors.errors) {
      var validationError = errors.errors[name];
      parsed[name] = { message:validationError.message };
    }
  }
  else if(errors.code == '11000' && errors.errmsg.indexOf('username') > 0) {
    parsed.username = { message: '이미 존재하는 아이디입니다.'};
  }
  else {
    parsed.unhandled = JSON.stringify(errors);
  }
  return parsed;
}

util.isLoggedin = function(req, res, next) {
  if(req.isAuthenticated()) {
    next();
  }
  else {
    req.flash('errors', { login: '먼저 로그인 하십시오.'});
    res.redirect('/login');
  }
}

util.noPermission = function(req, res) {
  req.flash('errors', { login: '권한이 없습니다.' });
  req.logout();
  res.redirect('/login');
}

module.exports = util;