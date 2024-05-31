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
import { stringify } from "querystring";
import Image from "next/image";
import selingkuhLogo from "./../../images/selingkuh_logo.png"

const Register: FC = () => {
  const [account, setAccount] = useState<registerUserInterface>({
    username: "",
    password: "",
    email: "",
  });

  // const newAccount = {
  //     username: account.username,
  //     email: account.email,
  //     password: account.password
  // }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

    const [check, setCheck] = useState<boolean>(false);

    // const newAccount = {
    //     username: account.username,
    //     email: account.email,
    //     password: account.password
    // }

  const resetAccount = () => {
    setAccount({
      username: "",
      password: "",
      email: "",
    });
  };


  // console.log(account)

  // const handleSubmit = useMutation(registerUser)

  const handleSubmit = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      alert(data.message);
      console.log({ data });
      // alert("Registrasi Berhasil");
      resetAccount();
    },
    onError: (error: Error) => {
      alert("Registrasi Gagal: " + error.message);
    },
  });

  // const registerUserDirect = async (account: registerUserInterface) => {
  //     try {
  //       const response = await fetch("/api/register", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json"
  //         },
  //         body: JSON.stringify({
  //           name: account.username,
  //           email: account.email,
  //           password: account.password,
  //         })
  //       });

  //       if (!response.ok) {
  //         throw new Error("Gagal mendaftar pengguna");
  //       }


    const handleCheck = ()=> {
        setCheck(!check)
    }

    // const registerUserDirect = async (account: registerUserInterface) => {
    //     try {
    //       const response = await fetch("/api/register", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //           name: account.username,
    //           email: account.email,
    //           password: account.password, 
    //         })
    //       });
      
    //       if (!response.ok) {
    //         throw new Error("Gagal mendaftar pengguna");
    //       }
      
    //       const data: registerUserInterface = await response.json();
      
    //       return data;
    //     } catch (error:any) {
    //       // Tangani kesalahan dengan melemparkannya kembali untuk ditangani oleh hook pemanggil
    //       throw new Error("Gagal mendaftar pengguna: " + error.message);
    //     }
    //   }


  //       return data;
  //     } catch (error:any) {
  //       // Tangani kesalahan dengan melemparkannya kembali untuk ditangani oleh hook pemanggil
  //       throw new Error("Gagal mendaftar pengguna: " + error.message);
  //     }
  //   }

  // const handleSubmit = useMutation({
  //     mutationFn: registerUserDirect,
  //     onSuccess: () => {
  //         alert("Registrasi Berhasil");
  //     },
  //     onError: (error: Error) => {
  //         alert("Registrasi Gagal: " + error.message);
  //     }
  // });


    return (
        <div className="bg-selingkuh-dark w-screen">
            <div className="flex justify-center items-center h-screen flex-col ">
                <div className="h-1/4 flex justify-center items-center sm:w-screen">
                    {/* <div className=""> */}
                        <Image src={selingkuhLogo} alt="Selingkuh Logo" width={50} height={50} />
                        <p className="text-white font-inter fw-semibold text-[30px]">SELINGKUH</p>
                    {/* </div> */}
                {/* <img src="/src/images/selingkuh_logo.png" alt="" className="w-5 h-5"/> */}
                </div>

                <div className="inline-block w-screen p-6 sm:w-screen">
                    <form>
                        <div className="font-inter mb-5">
                            <p className="font-extrabold text-white text-2xl">Register</p>
                            <p className="text-white">Create your own account now!</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Username" className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50" />
                            <input type="email" placeholder="Email" className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50" />
                            <input type="password" placeholder="Password" className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50" />
                            <input type="password" placeholder="Confirm Password" className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50" />
                            <label className="text-white" htmlFor="accept_terms"><input type="checkbox" className="me-3 leading-3 border-0" name="accept_terms" id="accept_terms" onClick={handleCheck} />Accept terms and condition</label>
                            {/* <p className="text-white">{check.toString()}</p> */}
                            <button className="text-white font-extrabold font-inter w-[100%] py-2 rounded-lg btn-selingkuh-dark">Register</button>
                            <div>
                                <p className="font-inter text-white text-center">Already registered? Login</p>
                            </div>
                        </div>
                    </form>
                </div>
                

                
            </div>
        </div>
    )
}


export default Register;
