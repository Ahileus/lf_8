import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Apartment } from 'src/apartment/apartment.model';
import { OccupantController } from './occupant.controller';
import { Occupant } from './occupant.model';
import { OccupantService } from './occupant.service';

@Module({
  controllers: [OccupantController],
  providers: [OccupantService],
  imports: [SequelizeModule.forFeature([Occupant, Apartment])],
  exports: [OccupantService],
})
export class OccupantModule {}
