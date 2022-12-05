import {
  Model,
  Table,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Residents } from 'src/residents/residents.model';
import { Roles } from './roles.model';

@Table({ tableName: 'resident_roles', createdAt: false, updatedAt: false })
export class ResidentRoles extends Model<ResidentRoles> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Roles)
  @Column({ type: DataType.INTEGER })
  roleId: number;

  @ForeignKey(() => Residents)
  @Column({ type: DataType.INTEGER })
  residentId: number;
}
