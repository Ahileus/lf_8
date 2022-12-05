import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesAuthGuard } from 'src/auth/roles-auth.guard';
import { CreateResidentsDto } from './dto/create-resident-dto';
import { Residents } from './residents.model';
import { ResidentsService } from './residents.service';

@ApiTags('Bewohner')
@Controller('residents')
export class ResidentsController {
  constructor(private residentService: ResidentsService) {}

  @ApiOperation({ summary: 'Anlegen Bewohner' })
  @ApiResponse({ status: 200, type: Residents })
  @Post()
  create(@Body() residentDto: CreateResidentsDto) {
    return this.residentService.createResident(residentDto);
  }

  @ApiOperation({ summary: 'Bekommen alle Bewohner' })
  @ApiResponse({ status: 200, type: [Residents] })
  @Roles('ADMIN')
  //@UseGuards(JwtAuthGuard)
  @UseGuards(RolesAuthGuard)
  @Get()
  getAllResidents() {
    return this.residentService.getResidents();
  }
}
