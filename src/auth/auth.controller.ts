import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';

@ApiTags('authentification')
@Controller('/auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    login(
        @Body() dataLogin: LoginDTO
    ){
        return this.authService.login(dataLogin);
    }

    @Post('/createuser')
    createUser(
        @Body() dataCreateUser: CreateUserDTO
    ){
        return this.authService.createUser(dataCreateUser);
    }
    
}
