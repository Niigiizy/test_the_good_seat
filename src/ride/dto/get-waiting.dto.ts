import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class GetWaitingDTO {

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    code:string;
}