// module.exports = class extends Error {
//   constructor(message: string, options = {}) {
//     const nativeError = super(message);
//     const validationError = {
//       isServerError: this.isServerError(options.statusCode),
//       requestMethod: options.requestMethod,
//       route: options.route,
//       payload: createPayload(options, nativeError),
//     };
//     return validationError;
//   }

//   isServerError(statusCode = 500) {
//     const numberStatusCode = Number(statusCode);
//     if (numberStatusCode >= 500 && numberStatusCode <= 599) return true;
//     return false;
//   }
// };
