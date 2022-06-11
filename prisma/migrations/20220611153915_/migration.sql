-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "raffles" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "frontCover" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "userId" TEXT,
    "place" TEXT NOT NULL,
    "term" TIMESTAMP(3) NOT NULL,
    "price_quote" INTEGER NOT NULL,
    "quota_payment_term" INTEGER NOT NULL,
    "limit_participant_quota" INTEGER NOT NULL,
    "support_contact" TEXT NOT NULL,
    "group_link" TEXT NOT NULL,
    "reservation_requirements" TEXT[],
    "prizes" TEXT[],
    "promotions" JSONB[],

    CONSTRAINT "raffles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quotas" (
    "id" SERIAL NOT NULL,
    "quotas" BIGINT NOT NULL,
    "buyer" TEXT,
    "contact_buyer" TEXT,
    "email_buyer" TEXT,
    "raffleId" INTEGER,

    CONSTRAINT "quotas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToRaffle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToRaffle_AB_unique" ON "_CategoryToRaffle"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToRaffle_B_index" ON "_CategoryToRaffle"("B");

-- AddForeignKey
ALTER TABLE "raffles" ADD CONSTRAINT "raffles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quotas" ADD CONSTRAINT "quotas_raffleId_fkey" FOREIGN KEY ("raffleId") REFERENCES "raffles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToRaffle" ADD CONSTRAINT "_CategoryToRaffle_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToRaffle" ADD CONSTRAINT "_CategoryToRaffle_B_fkey" FOREIGN KEY ("B") REFERENCES "raffles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
