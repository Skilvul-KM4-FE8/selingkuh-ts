import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";
import { NextApiRequest, NextApiResponse } from "next";
import { compareSync } from "bcrypt-ts";

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export default async function handleLogin(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    console.log({ email }, { password });

    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
      select: {
        email: true,
        password: true,
        name: true,
        image: true,
      },
    });
    // if (compareSync(password, user.password)) {
    //   res.status(200).json({ message: "User Found", user });
    // } else {
    //   if (!user) {
    //     res.status(404).json({ message: "User not found" });
    //   } else {
    //     res.status(401).json({ message: "Invalid password" });
    //   }
    // }

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    if (compareSync(password, user.password)) {
      res.status(200).json({ message: "User Found", user });
    } else {
      res.status(401).json({ message: "Invalid password" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
