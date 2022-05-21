import { ApiProperty } from "@nestjs/swagger";

export class RequestRideDTO {

    @ApiProperty()
    userId: string;

    @ApiProperty()
    offerId: string;

    @ApiProperty()
    aggregatorCode: string;
    
}