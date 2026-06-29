import { Catch, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(error: any, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    response.status(error.status ?? 500).json({
      error: {
        code: error.code ?? 'INTERNAL_SERVER_ERROR',
        message: error.message ?? 'Unexpected error',
      },
    });
  }
}
