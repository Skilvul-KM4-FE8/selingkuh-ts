"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { FC, useState } from "react";
import {
  registerUserInterface,
  responseRegister,
} from "../interfaces/userInterfaces";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/api/register";
import Image from "next/image";

import Swal from "sweetalert2";

const Register: FC = () => {
  const [account, setAccount] = useState<registerUserInterface>({
    username: "",
    password: "",
    re_password: "",
    email: "",
  });

  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
    re_password: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const [check, setCheck] = useState<boolean>(false);

  const resetAccount = () => {
    setAccount({
      username: "",
      password: "",
      email: "",
      re_password: "",
    });
    setTouched({
      username: false,
      email: false,
      password: false,
      re_password: false,
    });
  };

  const handleSubmit = useMutation({
    mutationFn: registerUser,
    onSuccess: (data: any) => {
      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
      });
      resetAccount();
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message || "Registration failed";
      Swal.fire({
        title: "Error",
        text: errorMessage,
        icon: "error",
        color: "white",
        background: "#4E3ABA",
      });
    },
  });

  const handleCheck = () => {
    setCheck(!check);
  };

  const isNull =
    account.username.length == 0 ||
    account.email.length == 0 ||
    account.password.length == 0;
  const btnRegisClass = isNull
    ? "text-white font-semibold font-inter w-[100%] py-2 rounded-lg btn-selingkuh-dark cursor-not-allowed"
    : "text-white font-semibold font-inter w-[100%] py-2 rounded-lg btn-selingkuh-dark";

  return (
    <div className="bg-selingkuh-dark w-screen">
      {handleSubmit.isPending ? (
        <div className="z-10 bg-slate-950 bg-opacity-90 absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 w-screen h-screen">
          <div className="font-extrabold text-white text-5xl animate-pulse flex">
            L<p className="animate-spin">O</p>
            ading
            <p className="animate-bounce">...</p>
          </div>
        </div>
      ) : null}

      <div className="flex justify-center items-center h-screen flex-col">
        <div className="h-1/4 flex justify-center items-center w-screen">
          <Image
            src={selingkuhLogo}
            alt="Selingkuh Logo"
            className="w-[50px] sm:w-[70px] md:w-[80px] lg:w-[90px]"
          />
          <p className="text-white font-inter fw-semibold text-[30px] md:text-[40px] lg:text-[50px]">
            SELINGKUH
          </p>
        </div>

        <div className="inline-block w-screen px-6 sm:w-screen md:w-9/12 lg:w-4/12">
          <form>
            <div className="font-inter mb-5">
              <p className="font-extrabold text-white text-2xl">Register</p>
              <p className="text-white">Create your own account now!</p>
            </div>
            <div className="flex flex-col gap-4">
              <input
                required
                type="text"
                placeholder="Username"
                name="username"
                className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50"
                value={account.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.username && account.username.length < 6 ? (
                <p className="text-red-500">
                  Username must be at least 6 characters
                </p>
              ) : touched.username && account.username.length >= 6 ? (
                <p className="text-green-500">Username is valid</p>
              ) : null}
              <input
                required
                type="email"
                placeholder="Email"
                name="email"
                className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50"
                value={account.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && account.email.length === 0 ? (
                <p className="text-red-500">Email is required</p>
              ) : null}
              <input
                required
                type="password"
                placeholder="Password"
                name="password"
                className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50"
                value={account.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && account.password.length === 0 ? (
                <p className="text-red-500">Password is required</p>
              ) : null}
              <input
                required
                type="password"
                placeholder="Confirm Password"
                name="re_password"
                className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50"
                value={account.re_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.re_password &&
              account.password !== account.re_password ? (
                <p className="text-red-500">Password doesn't match</p>
              ) : null}
              <label className="text-white" htmlFor="accept_terms">
                <input
                  type="checkbox"
                  className="me-3 leading-3 border-0"
                  name="accept_terms"
                  id="accept_terms"
                  onClick={handleCheck}
                />
                Accept terms and condition
              </label>
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  handleSubmit.mutateAsync(account);
                }}
                disabled={handleSubmit.isPending || isNull}
                className={btnRegisClass}
              >
                {handleSubmit.isPending ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v)C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.939l3-2.647z"
                    ></path>
                  </svg>
                ) : null}
                Register
              </button>
              <div>
                <p className="font-inter text-white text-center">
                  Already registered?{" "}
                  <Link className="font-extrabold" href={"/login"}>
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
