import { Controller, Get } from '@nestjs/common';

type HealthResponse = {
  status: string;
  service: string;
};

@Controller('health')
export class AppController {
  @Get()
  getHealth(): HealthResponse {
    return {
      status: 'ok',
      service: 'repomind-api',
    };
  }
}
