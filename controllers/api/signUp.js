const router = require('express').Router();
const { Assignment } = require('../../models');


router.post('/', async (req, res) => {
  try {
    
    const memberID = req.session.memberID;
    console.log(memberID);
    console.log(req.body.eventId);
    console.log('SignUp Route Line 11');
    
    const dbassignmentData = await Assignment.create({
      event_id: req.body.eventId,
      member_id: req.session.memberID,
    });

    res.status(200).json(dbassignmentData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
