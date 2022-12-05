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
import { CreateStateDto } from './dto/create-state-dto';
import { StateService } from './state.service';

@ApiTags('Zustand')
@Controller('state')
export class StateController {
  constructor(private stateService: StateService) {}

  @Post()
  async create(@Body() dto: CreateStateDto) {
    return await this.stateService.create(dto);
  }

  @Get('/:name')
  async getByNummer(@Param('name') name: string) {
    return await this.stateService.getByName(name);
  }

  @Get('id/:id')
  async getById(@Param('id') id: number) {
    return await this.stateService.getById(id);
  }

  @Get()
  async getAll() {
    return await this.stateService.getAll();
  }

  @Patch('/:id')
  async update(@Body() dto: CreateStateDto, @Param('id') id: number) {
    return await this.stateService.update(dto, id);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number) {
    return await this.stateService.delete(id);
  }
}
