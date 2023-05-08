import { PrismaClient, Status } from "@prisma/client";
import { generateSlug } from "random-word-slugs";
const prisma = new PrismaClient();

const supplyChainItem = () => {
  return [...Array(10).keys()].map((i) => {
    const slug = generateSlug(2, {
      format: "title",
    });
    const price = Math.floor(Math.random() * 9999);
    const quantity = Math.floor(Math.random() * 999912);
    const creatorId = i % 2 === 0 ? 2 : 1;
    const statuses: Status[] = ["PENDING", "SHIPPING", "DELIVERED"];
    const status: Status = statuses[Math.floor(Math.random() * statuses.length)];
    return {
      title: slug,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      price,
      quantity,
      creatorId,
      status,
    };
  });
};

const eventsData = () => {
  return [...Array(50).keys()].map((i) => {
    const slug = generateSlug(2, {
      format: "title",
    });
    const creatorId = i % 2 === 0 ? 2 : 1;
    const custodianIds = [1, 2, 3, 4, 5, 6, 7];
    const supplyChainItemIds = [...custodianIds, 8, 9, 10];
    const custodianId =
      custodianIds[Math.floor(Math.random() * custodianIds.length)];
    const supplyChainItemId =
      supplyChainItemIds[Math.floor(Math.random() * supplyChainItemIds.length)];
    const locations = ["Nairobi", "Mombasa", "Italy", "Argentina", "Germany"];
    const location = locations[Math.floor(Math.random() * locations.length)];
    return {
      title: slug,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      location,
      custodianId,
      supplyChainItemId,
      creatorId,
    };
  });
};

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@me.io" },
    update: {},
    create: {
      email: "admin@me.io",
      name: "admin",
      password: "$2b$10$spy8WkdM2R4WJ6AmKJrcVum7HkGi09adQn3ytSyhxiquSD1XcqSb6",
    },
  });

  await prisma.user.upsert({
    where: { email: "admin2@me.io" },
    update: {},
    create: {
      email: "admin2@me.io",
      name: "admin2",
      password: "$2b$10$spy8WkdM2R4WJ6AmKJrcVum7HkGi09adQn3ytSyhxiquSD1XcqSb6",
    },
  });

  await prisma.custodian.createMany({
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

  const items = await prisma.supplyChainItem.createMany({
    data: supplyChainItem(),
  });

  const events = await prisma.event.createMany({
    data: eventsData(),
  });
  console.log({ admin, items, events });
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
