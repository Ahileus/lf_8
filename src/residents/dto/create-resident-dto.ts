import { ApiProperty } from '@nestjs/swagger';

export class CreateResidentsDto {
  @ApiProperty({ example: 'Mischa Schmidt', description: 'Vor und Nachname' })
  readonly name: string;
  @ApiProperty({
    example: 'MischaSchmidt@abc.de',
    description: 'email addresse',
  })
  readonly email: string;
}
