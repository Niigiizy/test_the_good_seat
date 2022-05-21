import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class GetOffersDTO {

    @ApiProperty()
    @IsNotEmpty()
    startLat: number;

    @ApiProperty()
    @IsNotEmpty()
    startLong: number;

    @ApiProperty()
    @IsString()
    startAddress: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    startCountry: string;

    @ApiProperty()
    @IsNotEmpty()
    endLat: number;

    @ApiProperty()
    @IsNotEmpty()
    endLong: number;

    @ApiProperty()
    @IsString()
    endAddress: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    endCountry: string;

    @ApiProperty()
    @IsNotEmpty()
    distance: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Type(() => String)
    userId: string;

    @ApiProperty()
    @IsNotEmpty()
    providerList: string[];

    @ApiProperty()
    @IsNotEmpty()
    nbrOfPassenger: number;

}