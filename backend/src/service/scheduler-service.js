import cron from "node-cron";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

const deleteUnpaidBookings = async () => {
  const now = new Date();
  const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  await prismaClient.booking.deleteMany({
    where: {
      isPaid: false,
      creation_time: { lt: twentyFourHoursAgo },
    },
  });
};

cron.schedule("0 * * * *", async () => {
  await deleteUnpaidBookings();
  console.log("Checked and deleted unpaid bookings older than 24 hours");
});
