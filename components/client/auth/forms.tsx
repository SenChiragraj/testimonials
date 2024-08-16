"use client";

import { doSignIn, doSignUp } from "@/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import { toast } from "sonner";

export const RegisterForm = () => {

  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password || !name) {
      toast.error("Please provide all fields");
      return;
    }

    try {
      await doSignUp(name, email, password).then(response => {
        if (!response?.success) {
          toast.error(response.message);
          return;
        }
        toast.success(response.message);
        router.push('/');
      });
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }

  }

  return (
     <form onSubmit={event => handleSubmit(event)}>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Input id="name" placeholder="Name" name="name" />
          <Input id="email" placeholder="Email" name="email" />
          <Input id="password" placeholder="Password" name="password" />
          <Button type="submit">Register</Button>
        </div>
        <div className="flex flex-col space-y-1.5">

        </div>
      </div>
    </form>
  )
};

export const LoginForm = () => {

  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const toastId = toast.loading("Logging in");

    if (!email || !password) {
      toast.error('Please provide all fields', { id: toastId });
      return;
    }

    const error = await doSignIn(email, password);
    if (error) {
      toast.error(String(error), { id: toastId });
    } else {
      toast.success("Login Successful", { id: toastId });
      router.refresh();
    }
  }

  return (
    <form onSubmit={event => handleSubmit(event)} >
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Input id="name" placeholder="Email" name="email" />
          <Input id="name" placeholder="Password" name="password" />
          <Button type="submit">Login</Button>
        </div>
        <div className="flex flex-col space-y-1.5">

        </div>
      </div>
    </form>
  );
}