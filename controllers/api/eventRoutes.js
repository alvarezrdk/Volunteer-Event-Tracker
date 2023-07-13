const router = require('express').Router();
const { events } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/EventsList', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const eventData = await events.findAll({
      include: [
        {
          model: events,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const eventVar = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('event', { 
      eventVar, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/NewEvent', withAuth, async (req, res) => {
  try {
    const newEvent = await events.create({
      ...req.body,
      members_id: req.session.user_id,
    });

    res.status(200).json(newEvent);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const eventData = await events.destroy({
      where: {
        id: req.params.id,
        members_id: req.session.user_id,
      },
    });

    if (!eventData) {
      res.status(404).json({ message: 'No event found with this id!' });
      return;
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
