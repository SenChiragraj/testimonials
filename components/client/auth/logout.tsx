"use client"
import { doLogout } from "@/action"
import { Button } from "../../ui/button"

export const Logout = () => {

  return (
    <Button
        onClick={() => doLogout()} // Redirect to home after sign out
      className="font-semibold text-wrap"
      size={"sm"}
      >
        Sign Out
    </Button>
  )
}