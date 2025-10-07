export const successResponse = (res, message, data = null) => {
  return res.status(200).json({ success: true, message, data });
};

export const errorResponse = (res, message, statusCode = 400) => {
  return res.status(statusCode).json({ success: false, message });
};
