import { prismaClient } from "../application/database.js";

const verifyPayment = async (req, res) => {
  const { order_id, transaction_status } = req.body;

  if (transaction_status === "settlement") {
    await prismaClient.booking.update({
      where: { id: order_id },
      data: { isPaid: true },
    });
  }

  res.status(200).send("OK");
};

export default { verifyPayment };
