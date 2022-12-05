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
import { CreateObjectDto } from './dto/create-object-dto';
import { ObjectService } from './object.service';

@ApiTags('Gegenstand')
@Controller('object')
export class ObjectController {
  constructor(private objectService: ObjectService) {}

  @Post()
  async create(@Body() dto: CreateObjectDto) {
    return await this.objectService.create(dto);
  }

  @Get('/:id')
  async getById(@Param('id') id: number) {
    return await this.objectService.getById(id);
  }

  @Get()
  async getAll() {
    return await this.objectService.getAll();
  }

  @Patch('/:id')
  async update(@Body() dto: CreateObjectDto, @Param('id') id: number) {
    return await this.objectService.update(dto, id);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.objectService.delete(id);
  }
}
