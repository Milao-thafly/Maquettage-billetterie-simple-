export class Validator {

    public static emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    static matchRegEx(value: string, regEx: RegExp) {
        return this.emailRegEx.test(value);
    }

    static isValidEmail(email: string): boolean {
        return this.emailRegEx.test(email);
    }

    static isStringType(value: any): boolean {
        return typeof value == "string";
    }

    static isShortLength(value: string, minLength: number): boolean {
        return value.length > minLength;
    }

    static isLongLength(value: string, maxLength: number): boolean {
        return value.length > maxLength;
    }
}