const router = require('express').Router();
const memberRoutes = require('./userRoutes');
const eventRoutes = require('./projectRoutes');

router.use('/members', membersRoutes);
router.use('/events', eventRoutes);

module.exports = router;
