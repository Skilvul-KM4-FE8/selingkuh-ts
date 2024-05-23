"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { userLogin } from "../interfaces/userInterfaces";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/login";

export default function Page() {
  const [login, setLogin] = React.useState<userLogin>({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const resetAccount = () => {
    setLogin({
      password: "",
      email: "",
      username: "",
    });
  };

  const handleSubmit = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      alert(data.message);
      console.log({ data });
      alert(`${data.username} Berhasil Login`);
      resetAccount();
    },
    onError: (error: Error) => {
      alert("Login Gagal: " + error.message);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-selingkuh">
      <Card className="w-full max-w-md lg:7/12 md:w-screen mx-5">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login dulu yuk sebelum memulai chat dengan selingkuhan kamu
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input
                  type="email"
                  placeholder="Masukkan Email kamu"
                  onChange={(e) => handleChange(e)}
                  value={login.email}
                  name="email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Masukkan Password kamu"
                  onChange={(e) => handleChange(e)}
                  value={login.password}
                  name="password"
                />
              </div>
            </div>
            <Button
              onClick={async (e) => {
                e.preventDefault();
                handleSubmit.mutateAsync(login);
              }}
              disabled={handleSubmit.isPending}
            >
              Login
            </Button>
            <p>{handleSubmit.isSuccess ? "Data has been posted" : null}</p>
            <p className="text-red-500">
              {handleSubmit.isError ? "Failed to post data" : null}
            </p>
          </form>
        </CardContent>

        <CardFooter className="grid">
          <div className="text-slate-700 mt-3 text-sm">
            Anda Belum punya akun? Silahkan{" "}
            <Link
              href={"/register"}
              className="text-rose-900 hover:font-bold hover:text-blue-800 hover:underline text-sm underline"
            >
              {" "}
              Register.
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
