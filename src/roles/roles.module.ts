import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Roles } from './roles.model';
import { Residents } from 'src/residents/residents.model';
import { ResidentRoles } from './resident-role.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Roles, Residents, ResidentRoles])],
  exports: [RolesService],
})
export class RolesModule {}
