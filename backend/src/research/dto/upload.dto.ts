import { IsString, IsNotEmpty } from 'class-validator';

export class UploadDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  product: string;
}
