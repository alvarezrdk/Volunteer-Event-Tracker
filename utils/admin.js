const { Members } = require('../models');

const checkIfAdmin = async (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    const admin = await Members.findOne({ where: { id: req.session.memberID, role: "admin" } });

    if (admin) {
        next();
      } else {
        res
        .status(404);
      return;
    }};
  
  module.exports = checkIfAdmin;