import { ErrorHandler } from "@angular/core";

export class globalErrorHandler implements ErrorHandler {
    handleError(error: any): void {
       console.log("Global error handler:", error);
    }
}