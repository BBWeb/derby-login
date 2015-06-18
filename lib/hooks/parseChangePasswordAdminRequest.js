module.exports = function(req, res, done) {

  var userId = req.body.userId;
  var password = req.body.password;
  var confirm = req.body.confirm;

  if (!userId) return done('Must specify userId');
  if (!password || !confirm) return done('Please fill all fields');
  if (password !== confirm) return done('Password should match confirmation');

  done(null, userId, password);
};