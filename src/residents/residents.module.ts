import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { ResidentRoles } from 'src/roles/resident-role.model';
import { Roles } from 'src/roles/roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { ResidentsController } from './residents.controller';
import { Residents } from './residents.model';
import { ResidentsService } from './residents.service';

@Module({
  controllers: [ResidentsController],
  providers: [ResidentsService],
  imports: [
    SequelizeModule.forFeature([Residents, Roles, ResidentRoles]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [ResidentsService],
})
export class ResidentsModule {}
