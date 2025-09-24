import { IsDate, IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ example: 'O Senhor dos Anéis' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'J.R.R. Tolkien' })
  @IsString()
  author: string;

  @ApiProperty({ example: 'HarperCollins' })
  @IsString()
  publisher: string;

  @ApiProperty({ example: 'Fantasia' })
  @IsString()
  gender: string;

  @ApiProperty({ example: 49.9 })
  @IsNumber()
  price: number;

  @ApiProperty({ example: '1954-07-29', type: String, format: 'date' })
  @IsDate()
  publishDate: Date;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  status?: boolean;
}
