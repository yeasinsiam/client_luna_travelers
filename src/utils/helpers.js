export function extractErrorMessages(errorObj) {
  let messages = [];

  Object.values(errorObj).forEach((errorArray) => {
    errorArray.forEach((messageArray) => {
      messages = messages.concat(messageArray);
    });
  });

  return messages;
}
