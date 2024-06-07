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

  // const newAccount = {
  //     username: account.username,
  //     email: account.email,
  //     password: account.password
  // }

    const [account, setAccount] = useState<registerUserInterface>({
        username: "",
        password: "",
        re_password: "",
        email: "",

    });

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
            re_password: ""
        })
    }

  // console.log(account)

  // const handleSubmit = useMutation(registerUser)



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

    const handleSubmit = useMutation({
        mutationFn: registerUser,
        onSuccess: (data:any) => {
            alert(data.message)
            console.log({data})
            // alert("Registrasi Berhasil");
            resetAccount()
        },
        onError: (error: Error) => {
            alert("Registrasi Gagal: " + error.message);
        },
    
    }) 


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
            {handleSubmit.isPending ? (<div className="z-10 bg-slate-950 bg-opacity-90 absolute flex justify-center items-center top-0 bottom-0 left-0 right-0 w-screen h-screen">
                <div className="font-extrabold text-white text-5xl animate-pulse flex">
                    L
                    {/* <svg className="right-10 animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v)C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.939l3-2.647z"></path>
                    </svg>  */}
                    <p className="animate-spin">O</p>
                    ading
                    <p className="animate-bounce">...</p>
                </div>
                {/* <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v)C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.939l3-2.647z"></path>
                    </svg>
                    Processing...
                </button> */}
            </div>) : null }
            
        
            <div className="flex justify-center items-center h-screen flex-col ">
                <div className="h-1/4  flex justify-center items-center w-screen">
                    {/* <div className=""> */}
                        <Image src={selingkuhLogo} alt="Selingkuh Logo" className="w-[50px] sm:w-[70px] md:w-[80px] lg:w-[90px] " />
                        <p className="text-white font-inter fw-semibold text-[30px] md:text-[40px] lg:text-[50px]">SELINGKUH</p>
                    {/* </div> */}
                {/* <img src="/src/images/selingkuh_logo.png" alt="" className="w-5 h-5"/> */}
                </div>

                <div className="inline-block w-screen px-6 sm:w-screen md:w-9/12 lg:w-4/12 ">
                    <form>
                        <div className="font-inter mb-5">
                            <p className="font-extrabold text-white text-2xl">Register</p>
                            <p className="text-white">Create your own account now!</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <input type="text" placeholder="Username" name="username" className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50" value={account.username} onChange={e => handleChange(e)} />
                            <input type="email" placeholder="Email" name="email" className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50" value={account.email} onChange={e => handleChange(e)} />
                            <input type="password" placeholder="Password" name="password" className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50" value={account.password} onChange={e => handleChange(e)}/>
                            <input type="password" placeholder="Confirm Password" name="re_password" className="px-3 py-2 rounded-lg border-2 text-slate-100 placeholder:text-slate-100 border-[#CBD5E1] bg-slate-100 bg-opacity-50" value={account.re_password} onChange={e => handleChange(e)}/>
                            { (account.password !== account.re_password) ? <p className="text-red-500">Password doesn't match</p> : null}
                            <label className="text-white" htmlFor="accept_terms"><input type="checkbox" className="me-3 leading-3 border-0" name="accept_terms" id="accept_terms" onClick={handleCheck} />Accept terms and condition</label>
                            <button onClick={async e =>{e.preventDefault(); handleSubmit.mutateAsync(account)} } disabled={handleSubmit.isPending} className="text-white font-semibold font-inter w-[100%] py-2 rounded-lg btn-selingkuh-dark">Register</button>
                            <div>
                                <p className="font-inter text-white text-center">Already registered? <Link className="font-extrabold" href={"/login"}>Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>

                

            </div>
        </div>
    )
}


export default Register;
