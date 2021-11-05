// eslint-disable-next-line
const handleError = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "oh d-d-d-dear!"
  });
};

module.exports = {
  handleError
};