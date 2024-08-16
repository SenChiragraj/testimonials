"use server";

import { connectToDB } from "@/app/model/connection/connectToDatabase";
import { User } from "@/app/model/userSchema";
import { signIn, signOut } from "@/auth";
import { CredentialsSignin } from "next-auth";


export async function doSignIn (email: string, password: string){
  try {
    await signIn("credentials", {
      email, password, redirect: true, redirectTo: '/'
    });
  } catch (error) {
    const err = error as CredentialsSignin;
    return err.cause;
  }
}

export async function doSignUp(name: string, email: string, password: string) {
  // Connect to database
  try {
    await connectToDB();
  } catch (error) {
    console.error("Database connection failed", error);
    throw new Error("Internal server error. Please try again later.");
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return { success: false, message: "User with this email already exists" };
    }

    await User.create({
      name,
      email,
      password,
    });

    return { success: true, message: "User created successfully" };
  } catch (error) {
    console.error("Error during user creation", error);
    return { success: false, message: "Cannot register at this moment" };
  }
};

export async function doLogout() { await signOut({ redirectTo: '/' }) }