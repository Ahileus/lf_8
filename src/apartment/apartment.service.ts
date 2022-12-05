import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Apartment } from './apartment.model';
import { CreateApartmentDto } from './dto/create-apartment-dto';

@Injectable()
export class ApartmentService {
  constructor(
    @InjectModel(Apartment) private apartmentRepository: typeof Apartment,
  ) {}

  async create(dto: CreateApartmentDto) {
    return await this.apartmentRepository.create(dto);
  }

  async getAll() {
    return await this.apartmentRepository.findAll({
      include: { all: true },
    });
  }

  async getById(id: number) {
    return await this.apartmentRepository.findByPk(id, {
      include: { all: true },
    });
  }

  async update(dto: CreateApartmentDto, id: number) {
    const objectState = await this.apartmentRepository.findByPk(id);
    await objectState.update({ ...dto });
    return objectState;
  }

  async delete(id: number) {
    try {
      const objectState = await this.apartmentRepository.findByPk(id);
      await objectState.destroy();
      return HttpStatus.OK;
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
