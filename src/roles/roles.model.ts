import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Residents } from 'src/residents/residents.model';
import { ResidentRoles } from './resident-role.model';

interface RolesCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Roles extends Model<Roles, RolesCreationAttrs> {
  @ApiProperty({ example: 1, description: 'ID, auto increment' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'USER', description: 'Es ist die Role von Bewohner' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  value: string;

  @ApiProperty({
    example: 'Benutzer:innen',
    description: 'Beschreubung der Role',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @BelongsToMany(() => Residents, () => ResidentRoles)
  resident: Residents[];
}
