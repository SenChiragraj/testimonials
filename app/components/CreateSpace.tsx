"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export function CreateSpace() {
  const [tabValue, setTabValue] = useState<string>("basic");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">+ Create Space</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[1400px] max-h-[900px]  min-h-[800px] overflow-y-auto">
        <div className="flex py-4 gap-5  w-full overflow-y-auto">
          <div className="w-[650px] h-fit">
            <Tabs value={tabValue} className="w-fit">
              <TabsContent value="basic">
                <Card>
                  <CardHeader>
                    <CardTitle>Account</CardTitle>
                    <CardDescription>
                      Make changes to your account here. Click save when youre done.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Space Name</Label>
                      <Input id="name" defaultValue="" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="username">Header Title</Label>
                      <Input id="username" defaultValue="@peduarte" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save changes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="thank-you">
                <Card>
                  <CardHeader>
                    <CardTitle>Password</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, youll be logged out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">Current password</Label>
                      <Input id="current" type="password" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">New password</Label>
                      <Input id="new" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>Save password</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex">
              <Tabs value={tabValue} onValueChange={setTabValue} className="w-full" >
                <TabsList className="grid w-fit grid-cols-2" >
                  <TabsTrigger value="basic">Basic</TabsTrigger>
                  <TabsTrigger value="thank-you">Thank you page</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <Tabs value={tabValue} onValueChange={setTabValue} className="w-full">
              <TabsContent value="basic" className="">
                <div className="flex flex-col items-center gap-2 w-full my-6">
                  <h1 className="text-3xl font-semibold">Create a new Space</h1>
                  <p className="text-sm mt-5">After the Space is created, it will generate a dedicated page for collecting testimonials.</p>
                  <div className="w-full">
                    <div className="space-y-1">
                      <Label className="opacity-75">Space Name</Label>
                      <Input id="space-name" type="text" placeholder="" required />
                    </div>
                    <div className="space-y-1">
                      <Label className="opacity-75">Header Title</Label>
                      <Input id="header" type="text" required placeholder="Would you like to give shoutout for xyz?" />
                    </div>
                    <div className="space-y-1">
                      <Label className="opacity-75">Your custom message</Label>
                      <Textarea required placeholder="Write a warm messages for your customers, and give them simple directions to make the best testimonial" id="message" />
                    </div>
                    <div className="space-y-1 gap-2">
                      <Label htmlFor="message">Questions :</Label>
                      <Input id="new" type="password" placeholder="How has [out product / service] helped you " />
                      <Input id="new" type="password" placeholder="Keep it short " />
                      <Input id="new" type="password" placeholder="What is the best thing about [out product / service] " />
                    </div>
                  </div>
                </div>
                </TabsContent>
                <TabsContent value="thank-you">
                  <div className="flex flex-col items-center gap-2 w-full my-6">
                    <h1 className="text-3xl font-semibold">Thank you page</h1>
                    <p className="text-sm mt-5">After the Space is created, it will generate a dedicated page for collecting testimonials.</p>
                    <div className="w-full">
                      <div className="space-y-1">
                        <Label className="opacity-75">Space Name</Label>
                        <Input id="space-name" type="text" placeholder="" required />
                      </div>
                      <div className="space-y-1">
                        <Label className="opacity-75">Header Title</Label>
                        <Input id="header" type="text" required placeholder="Would you like to give shoutout for xyz?" />
                      </div>
                      <div className="space-y-1">
                        <Label className="opacity-75">Your custom message</Label>
                        <Textarea required placeholder="Write a warm messages for your customers, and give them simple directions to make the best testimonial" id="message" />
                      </div>
                      <div className="space-y-1 gap-2">
                        <Label htmlFor="message">Questions :</Label>
                        <Input id="new" type="password" placeholder="How has [out product / service] helped you " />
                        <Input id="new" type="password" placeholder="Keep it short " />
                        <Input id="new" type="password" placeholder="What is the best thing about [out product / service] " />
                      </div>
                    </div>
                  </div>

                </TabsContent>
            </Tabs>

            <Button type="submit" className="w-full">Create new Space</Button>

          </div>
        </div>
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
