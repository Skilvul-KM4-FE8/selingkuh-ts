"use client";
import { registerUserInterface } from "@/app/interfaces/userInterfaces";

export const registerUser = async (account: registerUserInterface) => {
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: account.username,
      email: account.email,
      password: account.password,
    }),
  });

  const data: registerUserInterface = await response.json();

  return data;
};
