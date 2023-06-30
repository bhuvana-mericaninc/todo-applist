
import { Loginadmin } from "@/components/login/login";
import { Navbar } from "../components/navbar/navbar";
import { Signup } from "../components/signup/signup";

export default function Home() {
  return (
 <div>
  <Loginadmin />
  <Signup/>
  <Navbar/>
 </div>
  )
}
