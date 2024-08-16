
import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { User } from './app/model/userSchema';
import { connectToDB } from "./app/model/connection/connectToDatabase";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email"
        },
        password: {
          label: "Password",
          type: "password"
        }
      },
      authorize: async (credentials) => {

        const email = credentials.email as string | undefined
        const password = credentials.password as string | undefined

        if (!email || !password)
          throw new CredentialsSignin({
            cause: "Please provide both email & password"
          });

        //connect to database
        connectToDB();

        console.log(email, password);

        const user = await User.findOne({ email }).select("+password");
        console.log(user);
        if (!user) {
          console.log('first')
          throw new CredentialsSignin({
            cause: "Invalid email or password"
          });
        }

        // const isMatch = await compareSync(password, user.password);

        if (password != user.password) {
          console.log('second');
          throw new CredentialsSignin({
            cause: "Invalid Password, try again!"
          });
        }

        return { name: user.name, email: user.email, id : user._id };
      },
    })
  ],
  pages: {
    signIn : '/login'
  }
})