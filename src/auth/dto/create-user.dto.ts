import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDTO {

    @ApiProperty()
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password:string;

    @ApiProperty()
    @IsString()
    @IsPhoneNumber("FR")
    @IsNotEmpty()
    phone_number:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    lastName:string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    firstName:string;

    @ApiProperty()
    @IsNotEmpty()
    isPhoneNumberVerified:boolean;
}