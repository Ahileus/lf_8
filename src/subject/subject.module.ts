import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ObjectStand } from 'src/object/object.model';
import { Shelf } from 'src/shelf/shelf.model';
import { SubjectController } from './subject.controller';
import { Subject } from './subject.model';
import { SubjectService } from './subject.service';

@Module({
  providers: [SubjectService],
  controllers: [SubjectController],
  imports: [SequelizeModule.forFeature([Subject, Shelf, ObjectStand])],
  exports: [SubjectService],
})
export class SubjectModule {}
