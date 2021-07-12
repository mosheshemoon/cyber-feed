import { ValidationError, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  HttpExceptionFilter,
  ValidationExceptionFilter,
  fallbackExeptionFilter,
  ValidationException,
} from './filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalFilters(
    new fallbackExeptionFilter(),
    new HttpExceptionFilter(),
    new ValidationExceptionFilter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      exceptionFactory: (validationErrors: ValidationError[]) => {
        const errorMessages: string[] = validationErrors.map(
          (error) => `${error?.property} has wrong value ${error?.value}
      ${Object.values(error?.constraints).join(', ')}`,
        );

        return new ValidationException(errorMessages);
      },
    }),
  );
  await app.listen(3000);
}
bootstrap();
