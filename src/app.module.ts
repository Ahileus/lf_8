import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ResidentsModule } from './residents/residents.module';
import { Residents } from './residents/residents.model';
import { RolesModule } from './roles/roles.module';
import { Roles } from './roles/roles.model';
import { ResidentRoles } from './roles/resident-role.model';
import { AuthModule } from './auth/auth.module';
import { ShelfModule } from './shelf/shelf.module';
import { Shelf } from './shelf/shelf.model';
import { SubjectModule } from './subject/subject.module';
import { Subject } from './subject/subject.model';
import { ObjectModule } from './object/object.module';
import { StateModule } from './state/state.module';
import { State } from './state/state.model';
import { ObjectStand } from './object/object.model';
import { ApartmentModule } from './apartment/apartment.module';
import { Apartment } from './apartment/apartment.model';
import { OccupantModule } from './occupant/occupant.module';
import { Occupant } from './occupant/occupant.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({ envFilePath: `.${process.env.NODE_ENV}.env` }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      models: [
        Residents,
        Roles,
        ResidentRoles,
        Shelf,
        Subject,
        State,
        ObjectStand,
        Apartment,
        Occupant,
      ],
      autoLoadModels: true,
    }),
    ResidentsModule,
    RolesModule,
    AuthModule,
    ShelfModule,
    SubjectModule,
    ObjectModule,
    StateModule,
    ApartmentModule,
    OccupantModule,
  ],
})
export class AppModule {}
