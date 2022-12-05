import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateResidentsDto } from 'src/residents/dto/create-resident-dto';
import { ResidentsService } from 'src/residents/residents.service';
import * as bcrypt from 'bcryptjs';
import { Residents } from 'src/residents/residents.model';

@Injectable()
export class AuthService {
  constructor(
    private residentService: ResidentsService,
    private jwtService: JwtService,
  ) {}

  async login(residentDto: CreateResidentsDto) {
    const resident = await this.validateResident(residentDto);
    return this.generateToken(resident);
  }

  async registration(residentDto: CreateResidentsDto) {
    const candidat = await this.residentService.getResidentByEmail(
      residentDto.email,
    );

    if (candidat) {
      throw new HttpException(
        'Es gibt schon Benutzer:innen mit diese Email',
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashPassword = await bcrypt.hash(residentDto.email, 5);

    const resident = await this.residentService.createResident({
      ...residentDto,
      email: hashPassword,
    });

    return this.generateToken(resident);
  }

  private async generateToken(resident: Residents) {
    const payload = {
      email: resident.email,
      id: resident.id,
      roles: resident.roles,
    };

    return { token: this.jwtService.sign(payload) };
  }

  private async validateResident(residentDto: CreateResidentsDto) {
    const resident = await this.residentService.getResidentByName(
      residentDto.name,
    );
    console.log(resident.email);
    const passwordEquals = await bcrypt.compare(
      residentDto.email,
      resident.email,
    );

    if (resident && passwordEquals) {
      return resident;
    }

    throw new UnauthorizedException({
      message: 'Name oder Email ist nicht Korrekt',
    });
  }
}
