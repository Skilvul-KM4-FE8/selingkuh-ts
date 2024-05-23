"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React, { FC, useState } from "react";
import { registerUserInterface, responseRegister } from "../interfaces/userInterfaces";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/api/register";
import { stringify } from "querystring";


const Register:FC = () => {

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
            [e.target.name]: e.target.value
        })
    }

    const resetAccount = () => {
        setAccount({
            username: "",
            password: "",
            email: "",
        })
    }

    // console.log(account)

    // const handleSubmit = useMutation(registerUser)

    const handleSubmit = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            alert(data.message)
            console.log({data})
            // alert("Registrasi Berhasil");
            resetAccount()
        },
        onError: (error: Error) => {
            alert("Registrasi Gagal: " + error.message);
        }
    
    }) 

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
        <div className="bg-gradient-to-b from-[#DB4E66] from-10% via-[#A24688] via-30% to-[#4E3ABA] to-80%">
            <div className="md:container md:mx-auto px-4 flex justify-center items-center h-screen">
                <Card className="lg:w-7/12 md:w-screen"> 
                    <CardHeader>
                        <CardTitle className="text-3xl">Register</CardTitle>
                        <CardDescription>Silahkan Register terlebih dahulu agar kamu bisa chatan dengan selingkuhanmu yaa...</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="flex gap-2 flex-col mb-2">
                                <p className="font-medium">Nama</p>
                                {/* <input type="text" placeholder="Masukkan Username kamu" onChange={e => handleChange(e)} name="username" className="border border-slate-400 px-2 py-2 rounded-md" /> */}
                                <input type="text" placeholder="Masukkan Username kamu" onChange={e => handleChange(e)} value={account.username} name="username" className="border border-slate-400 px-2 py-2 rounded-md" />
                            </div>
                            <div className="flex gap-2 flex-col mb-2">
                                <p className="font-medium">Email</p>
                                {/* <input type="email" placeholder="Masukkan Email kamu" onChange={e => handleChange(e)} name="email"  className="border border-slate-400 px-2 py-2 rounded-md" /> */}
                                <input type="email" placeholder="Masukkan Email kamu" onChange={e => handleChange(e)} value={account.email} name="email"  className="border border-slate-400 px-2 py-2 rounded-md" />
                            </div>
                            <div className="flex gap-2 flex-col mb-2">
                                <p className="font-medium">Password</p>
                                <input type="password" placeholder="Masukkan Password kamu" onChange={e => handleChange(e)} value={account.password} name="password" className="border border-slate-400 px-2 py-2 rounded-md" />
                                {/* <input type="password" placeholder="Masukkan Password kamu" onChange={e => handleChange(e)} name="password" className="border border-slate-400 px-2 py-2 rounded-md" /> */}
                            </div>
                            <p className="text-slate-700">Sudah punya akun? Silahkan <Link href={"/login"} className="text-rose-900 hover:font-bold hover:text-blue-800 hover:underline"> Login.</Link></p>
                            <Button className="mt-3 px-7" onClick={async (e) => {e.preventDefault(); handleSubmit.mutateAsync(account)}} disabled={handleSubmit.isPending} >Daftar</Button>
                            <p>{ handleSubmit.isSuccess ? 'Data has been posted' : null }</p>
                            <p className="text-red-500">{ handleSubmit.isError ? 'Failed to post data' : null }</p>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Register;
