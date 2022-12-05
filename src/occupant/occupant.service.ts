import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateOccupantDto } from './dto/create-occupant-dto';
import { Occupant } from './occupant.model';

@Injectable()
export class OccupantService {
  constructor(
    @InjectModel(Occupant) private occupantRepository: typeof Occupant,
  ) {}

  async create(dto: CreateOccupantDto) {
    return await this.occupantRepository.create(dto);
  }

  async getAll() {
    return await this.occupantRepository.findAll({
      include: { all: true },
    });
  }

  async getById(id: number) {
    return await this.occupantRepository.findByPk(id, {
      include: { all: true },
    });
  }

  async update(dto: CreateOccupantDto, id: number) {
    const objectState = await this.occupantRepository.findByPk(id);
    await objectState.update({ ...dto });
    return objectState;
  }

  async delete(id: number) {
    try {
      const objectState = await this.occupantRepository.findByPk(id);
      await objectState.destroy();
      return HttpStatus.OK;
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
