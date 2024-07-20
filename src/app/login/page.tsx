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
import { Toaster } from "@/components/ui/sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

// ======================================================
import { userLogin } from "../interfaces/userInterfaces";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/api/login";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

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
      console.log({ data });
      resetAccount();
      toast.success("Login Berhasil");
      router.push("/dashboard/contact");
    },
    onError: (error: Error) => {
      // alert("Login Gagal: " + error.message);
      toast.error(`Login Gagal: + ${error.message}`);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-selingkuh-dark">
      <Toaster />
      <div className="w-full max-w-md lg:7/12 md:w-screen">
        <CardHeader>
          <CardTitle className="font-extrabold text-white text-2xl">
            Login
          </CardTitle>
          <div className="text-white text-sm">
            Login dulu yuk sebelum memulai chat dengan selingkuhan kamu
          </div>
        </CardHeader>
        <CardContent>
          <form className="">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label className="text-white" htmlFor="name">
                  Email
                </Label>
                <Input
                  type="email"
                  placeholder="Masukkan Email kamu"
                  onChange={(e) => handleChange(e)}
                  value={login.email}
                  name="email"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label className="text-white" htmlFor="password">
                  Password
                </Label>
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
              className="my-3 w-full md:w-auto text-white btn-selingkuh-dark hover:bg-selingkuh-dark-500"
              onClick={async (e) => {
                e.preventDefault();
                handleSubmit.mutateAsync(login);
              }}
              disabled={handleSubmit.isPending}
            >
              Login
            </Button>
            <p>{handleSubmit.isSuccess ? "Logined" : null}</p>
            <p className="text-slate-100">
              {handleSubmit.isError ? "Email  atau password anda salah!" : null}
            </p>
          </form>
        </CardContent>

        <CardFooter className="grid">
          <div className="text-white  text-sm">
            Anda Belum punya akun? Silahkan{" "}
            <Link
              href={"/register"}
              className="text-blue-100 hover:font-bold hover:text-blue-300 hover:underline text-sm underline"
            >
              {" "}
              Register.
            </Link>
          </div>
        </CardFooter>
      </div>
    </div>
  );
}
