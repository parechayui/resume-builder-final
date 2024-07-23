-- CreateTable
CREATE TABLE "BaseResume" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "resume" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BaseResume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobDescription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobDescription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CustomizedResume" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "baseResumeId" TEXT NOT NULL,
    "jobDescriptionId" TEXT NOT NULL,
    "resume" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CustomizedResume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "BaseResume_userId_idx" ON "BaseResume"("userId");

-- CreateIndex
CREATE INDEX "JobDescription_userId_idx" ON "JobDescription"("userId");

-- CreateIndex
CREATE INDEX "CustomizedResume_userId_idx" ON "CustomizedResume"("userId");

-- CreateIndex
CREATE INDEX "CustomizedResume_baseResumeId_idx" ON "CustomizedResume"("baseResumeId");

-- CreateIndex
CREATE INDEX "CustomizedResume_jobDescriptionId_idx" ON "CustomizedResume"("jobDescriptionId");

-- AddForeignKey
ALTER TABLE "BaseResume" ADD CONSTRAINT "BaseResume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobDescription" ADD CONSTRAINT "JobDescription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomizedResume" ADD CONSTRAINT "CustomizedResume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomizedResume" ADD CONSTRAINT "CustomizedResume_baseResumeId_fkey" FOREIGN KEY ("baseResumeId") REFERENCES "BaseResume"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CustomizedResume" ADD CONSTRAINT "CustomizedResume_jobDescriptionId_fkey" FOREIGN KEY ("jobDescriptionId") REFERENCES "JobDescription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
