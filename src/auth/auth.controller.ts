import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateResidentsDto } from 'src/residents/dto/create-resident-dto';
import { AuthService } from './auth.service';

@ApiTags('Authentification')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  login(@Body() residentDto: CreateResidentsDto) {
    return this.authService.login(residentDto);
  }

  @Post('/registration')
  registration(@Body() residentDto: CreateResidentsDto) {
    return this.authService.registration(residentDto);
  }
}
