import { Model, Table, Column, DataType, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Occupant } from 'src/occupant/occupant.model';

interface ApartmentCreationAttrs {
  nummer: number;
}

@Table({ tableName: 'Wohnung' })
export class Apartment extends Model<Apartment, ApartmentCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID, auto increment' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'EG', description: 'Stockwerk' })
  @Column({ type: DataType.STRING, allowNull: false })
  floor: string;

  @ApiProperty({ example: 1, description: 'Nummer' })
  @Column({ type: DataType.INTEGER })
  nummer: number;

  @ApiProperty({ example: 2, description: 'Zimmer' })
  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
  room: number;

  @HasMany(() => Occupant)
  occupant: Occupant[];
}
