import { ErrorType } from "../types/UserType";

export default class CustomError {
    name: string;
    message: string;
    errors: any;

    constructor(error: any, errorType?: string) {
        if (errorType === ErrorType.FORM_VALIDATION) {
            this.name = ErrorType.FORM_VALIDATION;
            this.message = ErrorType.FORM_VALIDATION;
            this.errors = error.errors;
        } else {
            if (error.name) {
                this.name = error.name;
            }
            if (error.message) {
                this.message = error.message;
            }
        }        
    }
}