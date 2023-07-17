const checkIfAdmin = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (res.path.includes("/NewEvent") && !admin) {
        return res.sendStatus(401)
      } else {
      next();
    }};
  
  module.exports = checkIfAdmin;