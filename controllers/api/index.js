const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const eventRoutes = require('./eventRoutes');

router.use('/member', memberRoutes);
router.use('/events', eventRoutes);

module.exports = router;
