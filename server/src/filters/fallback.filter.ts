import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common"

@Catch()
export class fallbackExeptionFilter implements ExceptionFilter {

    catch(host: ArgumentsHost) {
        const ctx = host.switchToHttp(),
            request = ctx.getRequest(),
            response = ctx.getResponse(),
            status = HttpStatus.INTERNAL_SERVER_ERROR;

        response.status(status).json({
            statusCode: status,
            path: request.url,
        });
    }
}