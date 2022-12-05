import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Roles } from 'src/roles/roles.model';
import { ResidentRoles } from 'src/roles/resident-role.model';

interface ResidentsCreationAttrs {
  name: string;
  email: string;
}

@Table({ tableName: 'residents' })
export class Residents extends Model<Residents, ResidentsCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID, auto increment' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Mischa Schmidt', description: 'Vor und Nachname' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'MischaSchmidt@abc.de',
    description: 'email addresse',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({
    example: 'true oder false',
    description: 'Status des Bewohner',
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  activ: boolean;

  @BelongsToMany(() => Roles, () => ResidentRoles)
  roles: Roles[];
}
