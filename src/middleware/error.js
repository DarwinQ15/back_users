const handleError = (error, req, res, next) => {
    const {status, errorContent, message} = error;
    res.status(status).json({
      message: message,
      error: errorContent.message,
    });
};

module.exports = handleError;