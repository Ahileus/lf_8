import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateObjectDto } from './dto/create-object-dto';
import { ObjectStand } from './object.model';

@Injectable()
export class ObjectService {
  constructor(
    @InjectModel(ObjectStand) private objectRepository: typeof ObjectStand,
  ) {}

  async create(dto: CreateObjectDto) {
    return await this.objectRepository.create(dto);
  }

  async getAll() {
    return await this.objectRepository.findAll({
      include: { all: true },
    });
  }

  async getById(id: number) {
    return await this.objectRepository.findByPk(id, {
      include: { all: true },
    });
  }

//   async getByName(name: string) {
//     return await this.objectRepository.findOne({
//       where: { name },
//       include: { all: true },
//     });
//   }

  async update(dto: CreateObjectDto, id: number) {
    const objectState = await this.objectRepository.findByPk(id);
    await objectState.update({ ...dto });
    return objectState;
  }

  async delete(id: number) {
    try {
      const objectState = await this.objectRepository.findByPk(id);
      await objectState.destroy();
      return HttpStatus.OK;
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
