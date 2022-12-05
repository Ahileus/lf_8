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
import { CreateShelfDto } from './dto/create-shelf-dto';
import { ShelfService } from './shelf.service';

@ApiTags('Regal')
@Controller('shelf')
export class ShelfController {
  constructor(private shelfService: ShelfService) {}

  @Post()
  async createShelf(@Body() dto: CreateShelfDto) {
    return await this.shelfService.create(dto);
  }

  @Get('/:nummer')
  async getShelfByNummer(@Param('nummer') nummer: number) {
    return await this.shelfService.getShelfByNummer(nummer);
  }

  @Get()
  async getAll() {
    return await this.shelfService.getAll();
  }

  @Patch('/:id')
  async update(@Body() dto: CreateShelfDto, @Param('id') nummer: number) {
    return await this.shelfService.update(nummer, dto);
  }

  @Delete('/:id')
  async delete(@Param('id') nummer: number) {
    return await this.shelfService.delete(nummer);
  }
}
