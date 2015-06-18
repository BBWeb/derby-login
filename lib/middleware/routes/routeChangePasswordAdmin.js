module.exports = function(req, res, done) {
  var self = this;

  self.parseChangePasswordAdminRequest(req, res, function(err, userId, password) {
    if (err) return done(err);

    self.changePasswordAdmin(userId, password, function(err){
      if (err) return done(err);

      self.sendChangePassword(userId, password, done);
    });
  });
};