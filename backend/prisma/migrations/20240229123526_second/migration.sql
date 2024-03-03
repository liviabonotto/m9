-- DropForeignKey
ALTER TABLE "PeopleResearchs" DROP CONSTRAINT "PeopleResearchs_researchId_fkey";

-- AddForeignKey
ALTER TABLE "PeopleResearchs" ADD CONSTRAINT "PeopleResearchs_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "Researchs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
