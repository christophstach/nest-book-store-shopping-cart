import { Controller, Get, Redirect } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';

@Controller()
export class AppController {
  @Get()
  @Redirect()
  @ApiExcludeEndpoint()
  index() {
    return { url: '/api', statusCode: 301 };
  }
}
