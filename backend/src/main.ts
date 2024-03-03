import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const openapi = new DocumentBuilder()
    .setTitle('Documentação da API de Pesquisa')
    .setDescription('API para gerenciamento de pesquisas')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, openapi);
  SwaggerModule.setup('/api-docs', app, document);

  await app.listen(3000);
}

bootstrap();