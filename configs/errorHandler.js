export default function errorHandler(error) {
  if (error) {
    let message;
    if (error.response) {
      message = error.response.data.msg;

      return Promise.reject(error);
    }
  }
}
