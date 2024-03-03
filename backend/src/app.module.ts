import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResearchModule } from './research/research.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ResearchModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
