export function validator(data, config) {
  const errors = {};

  function validate(validateMethod, data, output) {
    let validationStatus;
    switch (validateMethod) {
      case "isRequired":
        validationStatus = data.trim() === "";
        break;
      case "isEmail": {
        const checkEmailRegExp = /^\S+@\S+\.\S+$/g;
        validationStatus = !checkEmailRegExp.test(data);
        break;
      }
      case "hasCapital": {
        const hasCapitalRegExp = /[A-Z]/g;
        validationStatus = !hasCapitalRegExp.test(data);
        break;
      }
      case "hasDigit": {
        const hasDigitRegExp = /\d+/g;
        validationStatus = !hasDigitRegExp.test(data);
        break;
      }
      case "hasWhitespace": {
        const hasWhitespaceRegExp = /\s/g;
        validationStatus = hasWhitespaceRegExp.test(data);
        break;
      }
      case "hasMinLength": {
        validationStatus = data.length < output.value;
        break;
      }
      default:
        break;
    }
    if (validationStatus) return output.message;
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        validateMethod,
        data[fieldName],
        config[fieldName][validateMethod]
      );
      if (error && !errors[fieldName]) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
}
