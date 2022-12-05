import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment-dto';

@ApiTags('Wohnung')
@Controller('apartment')
export class ApartmentController {
  constructor(private apartmentService: ApartmentService) {}

  @Post()
  async create(@Body() dto: CreateApartmentDto) {
    return await this.apartmentService.create(dto);
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.apartmentService.getById(id);
  }

  @Get()
  async getAll() {
    return await this.apartmentService.getAll();
  }

  @Patch('/:id')
  async update(@Body() dto: CreateApartmentDto, @Param('id') id: number) {
    return await this.apartmentService.update(dto, id);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.apartmentService.delete(id);
  }
}
