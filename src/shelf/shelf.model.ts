import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Subject } from 'src/subject/subject.model';

interface ShelfCreationAttrs {
  nummer: number;
}

@Table({ tableName: 'Regal' })
export class Shelf extends Model<Shelf, ShelfCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID, auto increment' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 1, description: 'Nummer vom Regal' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  nummer: number;

  @HasMany(() => Subject)
  subject: Subject[];
}
