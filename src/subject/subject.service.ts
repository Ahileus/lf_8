import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateSubjectDto } from './dto/create-subject-dto';
import { Subject } from './subject.model';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(Subject) private subjectRepository: typeof Subject,
  ) {}

  async create(dto: CreateSubjectDto) {
    return await this.subjectRepository.create(dto);
  }

  async getAll() {
    return await this.subjectRepository.findAll({
      include: { all: true },
    });
  }

  async getById(id: number) {
    return await this.subjectRepository.findByPk(id, {
      include: { all: true },
    });
  }

  async getByNumber(nummer: number) {
    return await this.subjectRepository.findOne({
      where: { nummer },
      include: { all: true },
    });
  }

  async update(dto: CreateSubjectDto, nummer: number) {
    const subject = await this.subjectRepository.findByPk(nummer);
    await subject.update({ ...dto });
    return subject;
  }

  async delete(nummer: number) {
    try {
      const subject = await this.subjectRepository.findByPk(nummer);
      await subject.destroy();
      return HttpStatus.OK;
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
