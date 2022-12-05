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
import { CreateSubjectDto } from './dto/create-subject-dto';
import { SubjectService } from './subject.service';

@ApiTags('Fach')
@Controller('subject')
export class SubjectController {
  constructor(private subjectServise: SubjectService) {}

  @Post()
  async create(@Body() dto: CreateSubjectDto) {
    return await this.subjectServise.create(dto);
  }

  @Get('/:nummer')
  async getByNummer(@Param('nummer') nummer: number) {
    return await this.subjectServise.getByNumber(nummer);
  }

  @Get()
  async getAll() {
    return await this.subjectServise.getAll();
  }

  @Patch('/:id')
  async update(@Body() dto: CreateSubjectDto, @Param('id') nummer: number) {
    return await this.subjectServise.update(dto, nummer);
  }

  @Delete('/:id')
  async delete(@Param('id') nummer: number) {
    return await this.subjectServise.delete(nummer);
  }
}
