import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) {}

    private api_key: string = process.env.API_KEY || this.configService.get<string>("API_KEY")

    createUser(dataCreateUser): Observable<AxiosResponse<any>> {
        return this.httpService.post(
            'https://apistaging.thegoodseat.fr/registeruser',
            dataCreateUser,
            {
                headers: {
                    "aggregatorCode": "poc-tgs",
                    "x-api-key": this.api_key
                }
            }
        ).pipe(
            map(response => response.data)
        );
    }

    login(dataLogin): Observable<AxiosResponse<any>> {
        return this.httpService.post(
            'https://apistaging.thegoodseat.fr/loginuser',
            dataLogin,
            {
                headers: {
                    "aggregatorCode": "poc-tgs",
                    "x-api-key": this.api_key
                }
            }
        ).pipe(
            map(
                response => {
                    console.log("keys response : ",Object.keys(response))
                    console.log("status response : ",response.status)
                    return response.data
                }
            )
        );
    }

}
