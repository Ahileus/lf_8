import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Shelf } from 'src/shelf/shelf.model';
import { ObjectStand } from 'src/object/object.model';

interface SubjectCreationAttrs {
  nummer: number;
}

@Table({ tableName: 'Fach' })
export class Subject extends Model<Subject, SubjectCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID, auto increment' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Nummer vom Fach' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  nummer: number;

  @ForeignKey(() => Shelf)
  @Column({ type: DataType.INTEGER, allowNull: false })
  shelfId: number;

  @BelongsTo(() => Shelf)
  shelf: Shelf;

  @HasMany(() => ObjectStand)
  objectStand: ObjectStand[];
}
