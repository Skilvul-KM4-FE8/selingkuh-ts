"use client";
import { userLogin } from "@/app/interfaces/userInterfaces";

export const loginUser = async (login: userLogin) => {
  const response = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: login.email,
      password: login.password,
      username: login.username,
    }),
  });

  const data: userLogin = await response.json();

  return data;
};
