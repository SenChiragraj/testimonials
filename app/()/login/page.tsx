import { auth } from "@/auth"
import { LoginForm } from "@/components/client/auth/forms"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { redirect } from "next/navigation"

const login = async () => {

  const session = await auth();

  if (session?.user)
    redirect('/');


  return (
    <div className="flex items-center justify-center h-dvh">
      <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Login to Start getting testimonials for your site.</CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm/>
      </CardContent>
      <CardFooter className="flex justify-between">
          <p className="text-sm">Don&apos;t have an account?
            <span className="underline italic"><Link href="/signup">Register</Link></span> here
          </p>
      </CardFooter>
    </Card>
    </div>
  )
}

export default login