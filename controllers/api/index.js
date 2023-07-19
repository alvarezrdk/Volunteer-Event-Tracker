const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const eventRoutes = require('./eventRoutes');
const signupRoutes = require('./signUp');

router.use('/member', memberRoutes);
router.use('/events', eventRoutes);
router.use('/signup', signupRoutes);



module.exports = router;
