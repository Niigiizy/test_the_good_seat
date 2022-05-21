import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    const api_key = process.env.API_KEY || this.configService.get<string>("API_KEY")
    console.log("api key : ", api_key)
    return 'Hello World! '.concat(api_key[0],api_key[1],api_key[2]);
  }
}
