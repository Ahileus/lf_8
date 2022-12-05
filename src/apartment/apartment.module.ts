import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Occupant } from 'src/occupant/occupant.model';
import { ApartmentController } from './apartment.controller';
import { Apartment } from './apartment.model';
import { ApartmentService } from './apartment.service';

@Module({
  providers: [ApartmentService],
  controllers: [ApartmentController],
  imports: [SequelizeModule.forFeature([Apartment, Occupant])],
  exports: [ApartmentService],
})
export class ApartmentModule {}
