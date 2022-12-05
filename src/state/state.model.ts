import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { ObjectStand } from 'src/object/object.model';

interface StateCreationAttrs {
  name: string;
}

@Table({ tableName: 'Zustand' })
export class State extends Model<State, StateCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID, auto increment' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Zustandsbeschreibung' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => ObjectStand)
  objectStand: ObjectStand[];
}
