var JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const ops=require('../orm/model')

// load up the user model



module.exports = function(passport) {

console.log("----------------------------------------");
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("Bearer");
opts.secretOrKey = "node-app-22"
passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
    if(jwt_payload.username){
       let pass = await ops.user.findOne({where: {username: jwt_payload.username}})
       if(pass.dataValues.password==jwt_payload.password)
             done(null,{user:jwt_payload.username})
       else
             done(null,false)
    }
       else
             done(null,false)
  }))
}
