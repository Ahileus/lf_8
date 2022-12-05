import {
  Model,
  Table,
  Column,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Subject } from 'src/subject/subject.model';
import { State } from 'src/state/state.model';

interface ObjectStandCreationAttrs {
  name: string;
  designation: string;
}

@Table({ tableName: 'Gegenstand' })
export class ObjectStand extends Model<ObjectStand, ObjectStandCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID, auto increment' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Fahrrad', description: 'Name des Gegenstands' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'Man kan fahren',
    description: 'Bezeichnung des Gegenstands',
  })
  @Column({ type: DataType.STRING })
  designation: string;

  @ForeignKey(() => Subject)
  @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true })
  subjectId: number;

  @BelongsTo(() => Subject)
  subject: Subject;

  @ForeignKey(() => State)
  @Column({ type: DataType.INTEGER, allowNull: false, primaryKey: true })
  stateId: number;

  @BelongsTo(() => State)
  state: State;
}
