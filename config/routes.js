var express = require('express');
var router = express.Router();
var userController = require('../controller/users');


//USER ROUTES
router.get('/users/session/profile', userController.userProfilePage);
router.get('/users/session/edit', userController.userEditProfilePage);


//maybe add a get route for users to pull down stats for users
//get map on new page PROBABLY CHANGE INTO MODAL COMPONENT
app.get('/tripMap/:id', 


//create new secure user in database
router.post('/users', userController.userCreate);
//login user to session
router.post('/users/sessions', userController.userLogin);


//post new Future Place to user's places
app.put('/users/places', userController.userPlacePush);
//remove future place
app.put('/users/places', userController.userPlacePull);


//delete user account
app.delete('/users/sessions/delete', userController.userDelete);



module.exports = router;









