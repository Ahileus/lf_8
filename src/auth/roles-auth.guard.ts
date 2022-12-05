import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles-auth.decorator';

@Injectable()
export class RolesAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRole = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRole) {
      return true;
    }
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader: string = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'User ist nicht autorisieren',
        });
      }

      const resident = this.jwtService.verify(token);
      req.resident = resident;

      return resident.roles.some((role) => requiredRole.includes(role.value));
    } catch (error) {
      console.log(error);
      throw new HttpException('Hat keinen Zugang', HttpStatus.FORBIDDEN);
    }
  }
}
