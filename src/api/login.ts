"use client";
import { userLogin } from "@/app/interfaces/userInterfaces";

export const registerUser = async (account: userLogin) => {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: account.email,
      password: account.password,
    }),
  });

  const data: userLogin = await response.json();

  return data;
};
