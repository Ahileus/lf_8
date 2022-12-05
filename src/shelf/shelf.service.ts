import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateShelfDto } from './dto/create-shelf-dto';
import { Shelf } from './shelf.model';

@Injectable()
export class ShelfService {
  constructor(@InjectModel(Shelf) private shelfRepository: typeof Shelf) {}

  async create(dto: CreateShelfDto) {
    return await this.shelfRepository.create(dto);
  }

  async getShelfByNummer(nummer: number) {
    return await this.shelfRepository.findOne({
      where: { nummer },
      include: { all: true },
    });
  }

  async getAll() {
    return await this.shelfRepository.findAll({
      include: { all: true },
    });
  }

  async update(nummer: number, dto: CreateShelfDto) {
    const shelf = await this.shelfRepository.findByPk(nummer);
    await shelf.update({ nummer: dto.nummer });
    return shelf;
  }

  async delete(nummer: number) {
    try {
      const shelf = await this.shelfRepository.findByPk(nummer);
      await shelf.destroy();
      return HttpStatus.OK;
    } catch (error) {
      return HttpStatus.BAD_REQUEST;
    }
  }
}
