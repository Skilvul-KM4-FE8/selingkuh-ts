import { createClient } from "@libsql/client";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { NextApiRequest, NextApiResponse } from "next";
import { compareSync, genSalt, hash } from "bcrypt-ts";
// import bcrypt from "bcrypt"
// const bcrypt = require("bcrypt")

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export default async function handleRegister(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, email, password } = req.body;
    console.log("Request Data: ", { name, email, password });

    try {
      const salt = await genSalt(10);
      const hashedPassword = await hash(password, salt);
      console.log("Hashed Password: ", hashedPassword);

      try {
        await prisma.user.create({
          data: {
            name,
            email,
            password: hashedPassword,
            image:
              "https://banner2.cleanpng.com/20180331/khw/kisspng-computer-icons-user-clip-art-user-5abf13d4b67e20.4808850915224718927475.jpg",
          },
        });
        res.status(201).json({ message: "User Created Successfully" });
      } catch (error: any) {
        console.error("Database Error: ", error);
        res
          .status(400)
          .json({ message: "Failed to create user", error: error.message });
      }
    } catch (error: any) {
      console.error("Hashing Error: ", error);
      res
        .status(500)
        .json({ message: "Failed to hash password", error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
