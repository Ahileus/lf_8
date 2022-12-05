import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Apartment } from 'src/apartment/apartment.model';

interface OccupantCreationAttrs {
  nummer: number;
}

@Table({ tableName: 'Bewohner' })
export class Occupant extends Model<Occupant, OccupantCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID, auto increment' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Mischa', description: 'Vorname' })
  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @ApiProperty({ example: 'Schmidt', description: 'Nachname' })
  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @ApiProperty({ example: '01.02.2002', description: 'Geburtsdatum' })
  @Column({ type: DataType.DATE })
  dateOfBirth: Date;

  @ForeignKey(() => Apartment)
  @Column({ type: DataType.INTEGER, allowNull: false })
  apartmentId: number;

  @BelongsTo(() => Apartment)
  apartment: Apartment;

  // @HasOne(() => Employee)
  // employee: Employee;

}
