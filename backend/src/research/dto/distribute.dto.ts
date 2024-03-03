import { IsString } from 'class-validator';

export class DistributeDto {
  @IsString()
  researchId: string;
}
