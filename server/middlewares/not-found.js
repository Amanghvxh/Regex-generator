const notFound = async function (req, res) {
  res.status(404).json({ success: false, data: "Route not found!" });
};

module.exports = notFound;
