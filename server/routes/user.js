const express = require('express');
const router = express.Router();
const user = require('../controllers/user')
const helpAuth = require('../helper/jwt')

router.post('/register', user.register);
router.post('/login', user.login)
router.get('/', user.all)


module.exports = router;
