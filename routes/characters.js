//CHARACTERS ROUTER
const express = require('express');
const router = express.Router();
const { requireUser } = require('./utils');
const {
    createChar
} = require('../db');

router.use((req, res, next) => {
    console.log('A request is being made to /characters');
    next();
});

router.post('/', requireUser, async (req, res, next) => {
    try {
        const { id } = req.user;
        const char = await createChar({
            userId: id,
            name,
            ac,
            cmb,
            cmd,
            ffac,
            tac,
            fortSave,
            reflexSave,
            willSave,
            initiative,
            isPublic
        })
        if (char) {
            res.status(200);
            res.send(char);
        } else {
            res.status(401);
            next({
                name: 'FailedCreateError',
                message: 'An error occurred. Unable to create character.'
            });
        };
    } catch (error) {
        next (error);
    };
});

module.exports = router;