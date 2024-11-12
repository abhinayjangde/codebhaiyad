"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import signup from "@/actions/signup";
import { Loader2 } from "lucide-react"
import Link from "next/link";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  function isValidEmail(email: string) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  return (
    <>

      <ToastContainer position="bottom-left" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
      <div className="flex justify-center items-center min-h-screen">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>SIGNUP</CardTitle>
            <CardDescription>Create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form action={async (formData: FormData) => {
              const name = formData.get("name") as string;
              const email = formData.get("email") as string;
              const password = formData.get("password") as string;
              setLoading(true);
              if (!name || !email || !password) {
                toast.error("All fields are required");
                setLoading(false);
                return;
              }
              if (!isValidEmail(email)) {
                toast.error("Invalid email format");
                setLoading(false);
                return;
              }
              const res = await signup(formData)
              if (res.success) {
                toast.success(res.message);
                setLoading(false);
              }
              else {
                toast.error(res.message);
                setLoading(false);
              }
            }}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Full Name" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" name="password" type="password" placeholder="Password" />
                </div>

              </div>
              {
                loading ? <Button className="my-2" disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button> : <Button type="submit" className="my-2">Signup</Button>
              }
              <div>Hava an account <Link className="text-blue-700" href="/login" >login</Link> here.</div>
            </form>
          </CardContent>

        </Card>
      </div>

    </>
  );
};

export default SignUp;
