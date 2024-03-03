import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as csvParser from 'csv-parser';
import { PrismaService } from '../prisma/prisma.service';
import { UploadDto } from './dto/upload.dto';
import { DistributeDto } from './dto/distribute.dto';
import * as sendgrid from '@sendgrid/mail';
import * as nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'grupo5trackcointeli@gmail.com',
    pass: 'fswalytaisvscpal',
  },
});

@Injectable()
export class ResearchService {
  constructor(private prisma: PrismaService) {}

  async parseCsv(filePath: string, body: UploadDto) {
    console.log(filePath);
    const JSON = await new Promise((resolve, reject) => {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(
          csvParser({
            separator: ';',
          }),
        )
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => reject(error));
    });

    const research = await this.prisma.researchs.create({
      data: {
        title: body.title,
        author: body.author,
        product: body.product,
      },
    });

    (JSON as any).forEach(async (element) => {
      await this.prisma.peopleResearchs.create({
        data: {
          name: element.name,
          email: element.email,
          researchId: research.id,
        },
      });
    });

    return { message: 'Arquivo processado com sucesso e pesquisa criada!', id: research.id};
  }

  async getAll() {
    const researchs = await this.prisma.researchs.findMany();
    return researchs;
  }

  async getOne(id: string) {
    const research = await this.prisma.researchs.findUnique({
      where: {
        id: id,
      },
    });

    return research;
  }

  async delete(id: string) {
    await this.prisma.researchs.delete({
      where: {
        id: id,
      },
    });

    return { message: 'Pesquisa deletada com sucesso!' };
  }

  async getStatus(id: string) {
    const peopleResearchs = await this.prisma.peopleResearchs.findMany({
      where: {
        researchId: id,
      },
    });

    const sentEmailsCount = peopleResearchs.filter(
      (person) => person.emailSent === true,
    ).length;

    const totalPeople = peopleResearchs.length;

    return {
      sentEmailsCount,
      totalPeople,
      percentage: totalPeople > 0 ? (sentEmailsCount / totalPeople) * 100 : 0,
    };
  }

  async distribute(id: string) {
    const research = await this.prisma.researchs.findUnique({
      where: {
        id: id,
      },
      include: {
        peopleResearchs: true,
      },
    });

    

    const emailsToSend = research.peopleResearchs.map((person) => person.email);

    const mailOptions = {
      to: emailsToSend,
      from: 'grupo5trackcointeli@gmail.com',
      subject: 'Pesquisa sobre ' + research.product,
      html:
        'Olá, você foi convidado a participar de uma pesquisa sobre ' +
        research.product +
        '. Clique no link abaixo para acessar a pesquisa: ' +
        research.link,
    };

    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err);
      else console.log(info);
    });

    try {
      await await Promise.all(
        research.peopleResearchs.map((person) =>
          this.prisma.peopleResearchs.update({
            where: { id: person.id },
            data: { emailSent: true },
          }),
        ),
      );
      return { message: 'Pesquisas distribuídas com sucesso!' };
    } catch (error) {
      console.error('Erro ao enviar emails: ', error);
      return { error: 'Erro ao enviar as pesquisas: ' + error.message };
    }
  }

  async updateResearchService(id: string, updateItemDto:UploadDto) {
    try {
      const updateReserch = await this.prisma.researchs.update({
        where: {
          id: id,
        },
        data: {
          title: updateItemDto.title,
          author: updateItemDto.author,
          product: updateItemDto.product
        }
      });
      return updateReserch;
    } catch (error) {
      console.error('Erro ao enviar emails: ', error);
      return { error: 'Erro ao enviar as pesquisas: ' + error.message };
    }
  }
  async deleteResearchService(id:string) {
    try{
      await this.prisma.researchs.delete({
        where: {
          id:id
        }
      })
      return "Pesquisa excluída com sucesso"
    } catch(error) {
      console.error('Erro ao enviar emails: ', error);
      return { error: 'Erro ao enviar as pesquisas: ' + error.message };
    }
  }
}






