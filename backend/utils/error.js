// situations like there is no err but we want to throw err, eg: password is not long enough. to handle these situation

export const errorHandler = (statusCode, message) => {
  const error = new Error();
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
