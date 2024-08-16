import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Dashboard from "./components/Dashboard";
const Home = async () => {

  const session = await auth();
  if (!session?.user) redirect('/login');

  return (
    <div className="">
      <Dashboard/>
    </div>
  );
};

export default Home;
