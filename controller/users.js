var db = require('../models');
var User = db.user;


function userCreate (req, res) {
    User.createSecure(req.body.email, req.body.password, function (err, newUser) {
    	res.json(newUser);
    	console.log(newUser);
  	});
}

function userLogin (req, res) {

}


function userProfilePage (req, res) {

}

function userEditProfilePage (req, res) {

}


function userPlacePush (req, res) {

}

function userPlacePull (req, res) {

}


function userDelete (req, res) {

}

module.exports.userCreate = userCreate;
module.exports.userLogin = userLogin;
module.exports.userProfilePage = userProfilePage;
module.exports.userEditProfilePage = userEditProfilePage;
module.exports.userPlacePush = userPlacePush;
module.exports.userPlacePull = userPlacePull;
module.exports.userDelete = userDelete;