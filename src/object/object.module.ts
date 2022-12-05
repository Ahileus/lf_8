import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { State } from 'src/state/state.model';
import { Subject } from 'src/subject/subject.model';
import { ObjectController } from './object.controller';
import { ObjectStand } from './object.model';
import { ObjectService } from './object.service';

@Module({
  controllers: [ObjectController],
  providers: [ObjectService],
  imports: [SequelizeModule.forFeature([ObjectStand, Subject, State])],
  exports: [ObjectService],
})
export class ObjectModule {}
