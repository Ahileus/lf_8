import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateStateDto } from './dto/create-state-dto';
import { State } from './state.model';

@Injectable()
export class StateService {
  constructor(@InjectModel(State) private stateRepository: typeof State) {}

  async create(dto: CreateStateDto) {
    return await this.stateRepository.create(dto);
  }

  async getAll() {
    return await this.stateRepository.findAll();
  }

  async getById(id: number) {
    return await this.stateRepository.findByPk(id);
  }

  async getByName(name: string) {
    return await this.stateRepository.findOne({ where: { name } });
  }

  async update(dto: CreateStateDto, id: number) {
    const shelf = await this.stateRepository.findByPk(id);
    await shelf.update({ ...dto });
    return shelf;
  }

  async delete(id: number) {
    try {
      const shelf = await this.stateRepository.findByPk(id);
      await shelf.destroy();
      return HttpStatus.OK;
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
