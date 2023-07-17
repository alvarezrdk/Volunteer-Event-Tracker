const router = require('express').Router();
const { Assignment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const dbmemberData = await Assignment.create({
      first_name: req.body.name,
      last_name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const memberData = await Members.findOne({where: { email: req.body.email}});

      req.session.save(() => {
      req.session.logged_in = true;
      req.session.memberID = memberData.id;
      res.status(200).json(dbmemberData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
