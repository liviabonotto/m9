import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Post, UploadedFile, Body, Get, Param, Inject, Delete, Put } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { File } from 'multer';
import { UploadDto } from './dto/upload.dto';
import { ResearchService } from './research.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('research')
export class ResearchController {
  constructor(
    private readonly researchService: ResearchService,
    @Inject(PrismaService) private prisma: PrismaService,
  ) {}

  @Post('upload')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
        uploadDto: {
          $ref: '#/components/schemas/UploadDto',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'CSV processado com sucesso',
  })
  async uploadFile(@UploadedFile() file: File, @Body() uploadDto: UploadDto) {
    const results = await this.researchService.parseCsv(file.path, uploadDto);
    return results;
  }

  @Get('status/:id')
  @ApiResponse({
    status: 200,
    description: 'Status do processamento',
  })
  async getStatus(@Param('id') id: string) {
    const status = await this.researchService.getStatus(id);
    return status;
  }


  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Registro de pesquisa excluído com sucesso',
  })
  async delete(@Param('id') id: string) {
    const results = await this.researchService.delete(id);
    return results;
  }

  
  @Put(':id')
  @ApiResponse({
    status:200,
    description:'Procura de Pesquisas'
  })
  async updateResearch(@Param('id') id: string, @Body() updateItemDto: UploadDto ) {
    return this.researchService.updateResearchService(id, updateItemDto);
  }

  @Delete(':id')
  @ApiResponse({
    status:200,
    description:'Deletar Pesquisa'
  })
  async deleteResearch(@Param('id') id: string){
    return this.researchService.deleteResearchService(id)
  }

  @Get('all')
  @ApiResponse({
    status: 200,
    description: 'Lista de registros de pesquisa',
  })
  async getAll() {
    const researchs = await this.researchService.getAll();
    return researchs;
  }

  @Post('distribute/:id')
  @ApiResponse({
    status: 200,
    description: 'Registro de pesquisa distribuído com sucesso',
  })
  async distribute(@Param('id') id: string) {
    const results = await this.researchService.distribute(id);
    return results;
  }

  

}