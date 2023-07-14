const router = require('express').Router();
const { events, members } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const eventData = await events.findAll({
    });

    // Serialize data so the template can read it
    const eventVar = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      eventVar, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/events', async (req, res) => {
  try {
    // Get all events and JOIN with user data
    const eventData = await events.findAll()
    const eventsList = eventData.map(event => event.get({plain: true}))
        res.render('event-list', {
          eventsList,
          logged_in: req.session.logged_in
        });
    } catch (error) {
      console.log("error message")
        console.log(error)
      res.status(500).json(error)
    }
});

router.get('/events/:id', async (req, res) => {
  try {
    const eventData = await events.findByPk(req.params.id, {
    });

    const eventVar = eventData.get({ plain: true });

    res.render('event-details', {
      ...eventVar,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const membersData = await members.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: events }],
    });

    const memberVar = memberData.get({ plain: true });

    res.render('profile', {
      ...memberVar,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('*', async (req,res) => {
  try {
    // Get all projects and JOIN with user data
    const eventData = await events.findAll({
      // include: [
      //   {
      //     model: events,
      //     attributes: ['name'],
      //   },
      // ],
    });

    // Serialize data so the template can read it
    const eventVar = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      eventVar, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
