import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // TODO
  const admin = await prisma.user.upsert({
    where: { email: "admin@admin.io" },
    update: {},
    create: {
      email: "admin@admin.io",
      name: "admin",
      password: "Pass@123"
    },
  });

  const custodians = await prisma.custodian.createMany({
    data: [
      { name: "DHL" },
      { name: "Fargo" },
      { name: "UPS" },
      { name: "G4S" },
      { name: "EMS Kenya" },
      { name: "Skynet Worldwide" },
      { name: "Aramex" },
    ],
  });
  console.log({ admin, custodians });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
