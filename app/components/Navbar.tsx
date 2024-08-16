import { Logout } from "@/components/client/auth/logout";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2">
      <div className="">TESTIMONIALS</div>
      <Logout/>
    </div>
  );
};
