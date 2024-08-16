import { RegisterForm } from "@/components/client/auth/forms"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

const register = () => {



  return (
    <div className="flex items-center justify-center h-dvh">
      <Card className="w-[350px] ">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Login to Start getting testimonials for your site.</CardDescription>
      </CardHeader>
        <CardContent>
          <RegisterForm/>
      </CardContent>
      <CardFooter className="flex justify-between">
          <p className="text-sm">Already have have an account?
            <span className="underline italic"><Link href="/login"> Login</Link></span> here
          </p>
      </CardFooter>
    </Card>
    </div>
  )
}

export default register