import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { ValidationException } from "./validation.exception";

@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {

    catch(exception: ValidationException, host: ArgumentsHost) {
        const ctx = host.switchToHttp(),
            response = ctx.getResponse();

        return response.status(400).json({
            createdBy: 'ValidationExceptionFilter',
            errorMessage: exception.validationErrors
        })
    }
}