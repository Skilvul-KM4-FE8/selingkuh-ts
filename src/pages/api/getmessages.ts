import { createClient } from "@libsql/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export default async function getMessages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const messages = await prisma.message.findMany();
  // console.log(messages)
  res.status(200).json(messages);
}
