const testController=require('./controllers/test-controller'),
userController=require('./controllers/users.controller'),
express = require('express');


module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
    const userRoutes = express.Router();
    userRoutes.get('/',userController.getUsers);
    userRoutes.get('/:id',userController.getUser);
    userRoutes.post('/',userController.createUser);

    apiRoutes.use('/users',userRoutes);


    apiRoutes.get('/test', testController.test);
    //attach router to root
    app.use('/api', apiRoutes);
};