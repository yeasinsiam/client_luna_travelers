export function extractErrorMessages(errorObj) {
  let messages = [];

  Object.values(errorObj).forEach((errorArray) => {
    errorArray.forEach((messageArray) => {
      messages = messages.concat(messageArray);
    });
  });

  return messages;
}

export function capitalizeText(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
