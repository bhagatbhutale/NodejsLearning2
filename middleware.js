// middleware
module.exports = reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide Age");
  } else if (req.query.age < 18) {
    res.send("You cannot access this page");
  } else {
    next();
  }
};
