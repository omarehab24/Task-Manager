const asyncWrapper = (fn) => {
  // Return async function as a closure for asyncWrapper
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      // Pass the error to the next middleware to handle it, if not found pass it to the default express error handler
      next(error);
    }
  };
};

module.exports = asyncWrapper;
