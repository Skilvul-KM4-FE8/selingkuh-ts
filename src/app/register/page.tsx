import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Register = () => {
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
                                <input type="text" placeholder="Masukkan Username kamu" className="border border-slate-400 px-2 py-2 rounded-md" />
                            </div>
                            <div className="flex gap-2 flex-col mb-2">
                                <p className="font-medium">Email</p>
                                <input type="email" placeholder="Masukkan Email kamu " className="border border-slate-400 px-2 py-2 rounded-md" />
                            </div>
                            <div className="flex gap-2 flex-col mb-2">
                                <p className="font-medium">Password</p>
                                <input type="password" placeholder="Masukkan Password kamu" className="border border-slate-400 px-2 py-2 rounded-md" />
                            </div>
                            <Button className="mt-3 px-7">Daftar</Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Register;
