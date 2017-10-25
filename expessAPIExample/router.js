const testController=require('./controllers/test-controller'),
express = require('express');


module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
    const subRoutes = express.Router();
    subRoutes.get('/test',testController.test);
    apiRoutes.use('/data',subRoutes);

    apiRoutes.get('/test', testController.test);
    //attach router to root
    app.use('/api', apiRoutes);
};