import { Injectable } from '@nestjs/common';
import { ApiResponse } from './interfaces/response.interface';

interface IStatus {
  service: string;
  version: string;
}

@Injectable()
export class AppService {
  getHello(): ApiResponse<IStatus> {
    const statusResponse: ApiResponse<IStatus> = {
      success: true,
      data: {
        service: 'purchase-api',
        version: '1.0.0',
      },
      message: 'Hello NestJS',
    };

    return statusResponse;
  }
}
