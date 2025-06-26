const asyncHandler = (fn) => async (req, res, next) => {
  try {
    return await fn(req, res, next);
  } catch (error) {
    console.error("Caught error in asyncHandler:", error); // optional
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
      errors: error.errors || [],
    });
  }
};

export { asyncHandler };
