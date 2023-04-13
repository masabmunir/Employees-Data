let express = require('express');
let router = express.Router();
let userRoutes = require('./modules/Authentication/routes/userRoutes')

router.use('/',userRoutes);

module.exports = router;
