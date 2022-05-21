import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';

@Injectable()
export class RideService {

    constructor(
        private httpService: HttpService,
        private configService: ConfigService
    ) {}

    private api_key: string = process.env.API_KEY || this.configService.get<string>("API_KEY")

    getOffers(dataOffers, authorization): Observable<AxiosResponse<any>> {
        console.log("dataOffers : ",dataOffers)
        return this.httpService.post(
            'https://apistaging.thegoodseat.fr/getOffersByPartner',
            dataOffers,
            {
                headers: {
                    "aggregatorCode": "poc-tgs",
                    "x-api-key": this.api_key,
                    "Authorization": authorization
                }
            }
        ).pipe(
            map(response => {
                console.log("response.data : ",response.data)
                return response.data
            })
        );
    }

    getProviders(authorization): Observable<AxiosResponse<any>> {
        return this.httpService.get(
            'https://apistaging.thegoodseat.fr/getproviders',
            {
                headers: {
                    "aggregatorCode": "poc-tgs",
                    "x-api-key": this.api_key,
                    "Authorization": authorization
                }
            }
        ).pipe(
            map(response => {
                console.log("response.data : ",response.data)
                return response.data
            })
        );
    }

    requestRide(dataRequestRide, authorization): Observable<AxiosResponse<any>> {
        return this.httpService.post(
            'https://apistaging.thegoodseat.fr/registeruser',
            dataRequestRide,
            {
                headers: {
                    "rideId": "essai",
                    "aggregatorCode": "poc-tgs",
                    "x-api-key": this.api_key,
                    "Authorization": authorization
                }
            }
        ).pipe(
            map(response => response.data)
        );
    }

    getPrices(dataGetPrice, authorization): Observable<AxiosResponse<any>> {
        return this.httpService.post(
            'https://apistaging.thegoodseat.fr/registeruser',
            dataGetPrice,
            {
                headers: {
                    "rideId": "essai",
                    "aggregatorCode": "poc-tgs",
                    "x-api-key": this.api_key,
                    "Authorization": authorization
                }
            }
        ).pipe(
            map(response => response.data)
        );
    }

    getWaiting(dataGetWaiting, authorization): Observable<AxiosResponse<any>> {
        return this.httpService.post(
            'https://apistaging.thegoodseat.fr/registeruser',
            dataGetWaiting,
            {
                headers: {
                    "rideId": "essai",
                    "aggregatorCode": "poc-tgs",
                    "x-api-key": this.api_key,
                    "Authorization": authorization
                }
            }
        ).pipe(
            map(response => response.data)
        );
    }

}
