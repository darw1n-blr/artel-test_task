import {BadRequestException, HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as geoip from 'geoip-lite';

@Injectable()
export class AppService {

  getAddress(ip: string){
    const geo = geoip.lookup(ip);

    const ipPattern = new RegExp('^\\d+(\\.\\d+){3}$')
    const isIp = ipPattern.test(ip);
    if (!isIp) return new HttpException("Wrong enter value", HttpStatus.BAD_REQUEST);

    if(!geo) return new HttpException("No data for this address", HttpStatus.NOT_FOUND);


    const data ={
      lat: geo.ll[0],
      lng: geo.ll[1],
      country: geo.country,
      city: geo.city,
    }
    return data;
  }
}
