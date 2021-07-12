import { ArgumentsHost, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";

export class HttpExceptionFilter implements ExceptionFilter {

    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp(),
            response = ctx.getResponse(),
            status = HttpStatus.BAD_REQUEST;

        return response.status(status).json({
            status,
            createdBy: 'HttpExceptionFilter',
            errorMessage: exception.message
        })
    }
}