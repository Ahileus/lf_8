import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateController } from './state.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { State } from './state.model';
import { ObjectStand } from 'src/object/object.model';

@Module({
  providers: [StateService],
  controllers: [StateController],
  imports: [SequelizeModule.forFeature([State, ObjectStand])],
  exports: [StateService],
})
export class StateModule {}
