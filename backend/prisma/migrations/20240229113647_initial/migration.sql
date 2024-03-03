-- CreateTable
CREATE TABLE "Researchs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "link" TEXT DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Researchs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeopleResearchs" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "researchId" TEXT NOT NULL,
    "emailSent" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PeopleResearchs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PeopleResearchs" ADD CONSTRAINT "PeopleResearchs_researchId_fkey" FOREIGN KEY ("researchId") REFERENCES "Researchs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
