import { Injectable } from '@nestjs/common';
import { Residents } from './residents.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateResidentsDto } from './dto/create-resident-dto';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class ResidentsService {
  constructor(
    @InjectModel(Residents) private residentRepository: typeof Residents,
    private rolesService: RolesService,
  ) {}

  async createResident(dto: CreateResidentsDto) {
    const resident = await this.residentRepository.create(dto);
    const role = await this.rolesService.getRoleByValue('ADMIN');
    await resident.$set('roles', [role.id]);
    resident.roles = [role];
    return resident;
  }

  async getResidents() {
    const residents = this.residentRepository.findAll({
      include: { all: true },
    });
    return residents;
  }

  async getResidentByEmail(email: string) {
    const resident = await this.residentRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return resident;
  }

  async getResidentByName(name: string) {
    const resident = await this.residentRepository.findOne({
      where: { name },
      include: { all: true },
    });
    return resident;
  }
}
