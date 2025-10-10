const express =  require('express')
const userRouter = require('./user')
const router = express.Router();

router.use('/user', userRouter);

module.exports = router;

// api/v1/user
// api/v1/user/signup
// api/v1/user/signin
// api/v1/user/changePassword


// api/v1/account/transferMoney
// api/v1/account/balance