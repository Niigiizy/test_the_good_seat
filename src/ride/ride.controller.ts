import { Body, Controller, Get, Headers, Post } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { RideService } from './ride.service';
import { GetPricesDTO } from './dto/get-prices.dto';
import { GetWaitingDTO } from './dto/get-waiting.dto';
import { RequestRideDTO } from './dto/request-ride.dto';
import { GetOffersDTO } from './dto/get-offers.dto';

@ApiTags('ride')
@Controller('ride')
export class RideController {

    constructor(private readonly rideService: RideService) {}

    @Get('/getproviders')
    getProviders(
        @Headers('Authorization') authorization: String
    ){
        return this.rideService.getProviders(authorization)
    }

    @Post('/requestride')
    requestRide(
        @Body() dataRequestRide: RequestRideDTO,
        @Headers('Authorization') authorization: String
    ){
        return this.rideService.requestRide(dataRequestRide, authorization);
    }

    @Post('/getprice')
    getPrices(
        @Body() dataGetPrice: GetPricesDTO,
        @Headers('Authorization') authorization: String
    ){
        return this.rideService.getPrices(dataGetPrice, authorization);
    }

    @Post('/getwaiting')
    getWaiting(
        @Body() dataGetWaiting: GetWaitingDTO,
        @Headers('Authorization') authorization: String
    ){
        return this.rideService.getWaiting(dataGetWaiting, authorization);
    }

    @Post('/getoffersbypartner')
    getOffers(
        @Body() dataOffers: GetOffersDTO,
        @Headers('Authorization') authorization: String
    ){
        return this.rideService.getOffers(dataOffers, authorization);
    }

}
