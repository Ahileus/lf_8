import { Module } from '@nestjs/common';
import { ShelfService } from './shelf.service';
import { ShelfController } from './shelf.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Shelf } from './shelf.model';
import { Subject } from 'src/subject/subject.model';

@Module({
  providers: [ShelfService],
  controllers: [ShelfController],
  imports: [SequelizeModule.forFeature([Shelf, Subject])],
  exports: [ShelfService],
})
export class ShelfModule {}
