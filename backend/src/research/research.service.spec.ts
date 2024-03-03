import { PrismaService } from '../prisma/prisma.service';
import { ResearchService } from './research.service';

describe('CatsController', () => {
  let researchService: ResearchService;

  beforeEach(() => {
    researchService = new ResearchService(new PrismaService);
  });

  let idToDelete = "";

  describe('Testing sequence', () => {
    it('Should create a research based on CSV values ', async () => {
        const result = await researchService.parseCsv("uploads/50ac87ab9e2e4862476c6f8bc194073e", {
            title: "Teste",
            author: "Teste",
            product: "Teste"
        });
        expect(result.message).toEqual('Arquivo processado com sucesso e pesquisa criada!');

        idToDelete = (result as any).id;
    }, 30000);

    it('Should get all researchs', async () => {
        const result = await researchService.getAll();
        expect(result).toEqual(expect.arrayContaining([]));
    });

    it('Should get one research', async () => {
        console.log(idToDelete)
        const result = await researchService.getOne(idToDelete);
        expect(result).toEqual(expect.objectContaining({}));
    });

    it('Should get research status', async () => {
        const result = await researchService.getStatus(idToDelete);
        expect(result).toEqual(expect.objectContaining({}));
    });

    it('Should distribute one research', async () => {
        const result = await researchService.distribute(idToDelete);
        expect(result).toEqual(expect.objectContaining({}));
    });

    it('Should delete one research', async () => {
        const result = await researchService.delete(idToDelete);
        expect(result).toEqual(expect.objectContaining({}));
    });
  });
});