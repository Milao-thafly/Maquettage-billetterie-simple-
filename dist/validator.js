export class Validator {
    static matchRegEx(value, regEx) {
        return this.emailRegEx.test(value);
    }
    static isValidEmail(email) {
        return this.emailRegEx.test(email);
    }
    static isStringType(value) {
        return typeof value == "string";
    }
    static isShortLength(value, minLength) {
        return value.length > minLength;
    }
    static isLongLength(value, maxLength) {
        return value.length > maxLength;
    }
}
Validator.emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
