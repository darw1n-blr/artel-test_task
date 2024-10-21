import {Controller, Get, Param, Query} from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('ip') ip: string ){
    return this.appService.getAddress(ip)
  }
}
