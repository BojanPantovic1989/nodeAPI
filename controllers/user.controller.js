const express = require('express');
const router = express.Router();
const userService = require('../services/users');

const authenticate = async (req, res, next) => {
    const result = await userService.authenticate(req.body);
    res.json({ token: result });
}

// routes
router.post('/', authenticate);

module.exports = router;

