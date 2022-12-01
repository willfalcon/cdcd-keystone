-- CreateTable
CREATE TABLE "Site" (
    "id" STRING NOT NULL,
    "title" STRING NOT NULL DEFAULT '',
    "url" STRING NOT NULL DEFAULT '',
    "frontendUrl" STRING NOT NULL DEFAULT '',
    "flagTime" INT4,
    "postTypes" JSONB,
    "updatePostTypes" JSONB,

    CONSTRAINT "Site_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL DEFAULT '',
    "email" STRING NOT NULL DEFAULT '',
    "password" STRING,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");
