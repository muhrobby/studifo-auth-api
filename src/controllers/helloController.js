const hello = async (req, res, next) => {
  try {
    res.status(200).json({
      status: "OK",
      message: "Hello Word",
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = hello;
