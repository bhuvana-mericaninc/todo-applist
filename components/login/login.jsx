"use client"

import{db} from "../../utils/Firebase";
import {collection,getDocs} from "firebase/firestore"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export const Loginadmin =() =>{
  const[email,setEmail] = useState("");
  const [password,setPassword] = useState('');
  const[val,setValue]=useState([]);
  const value = collection(db,"users");
  const router=useRouter();

  useEffect (()=>{
    const getData =async ()=>{
      const dbVal = await getDocs(value);
      setValue(dbVal.docs.map((doc) => ({...doc.data(),id:doc.id})))
    }
    getData();
    
  },[val]);
  

 const Login = (e) => {

e.preventDefault()

val.forEach((value) =>{
  console.log(val);
  if(value.email === email && value.password === password ){
    router.push("/navbar");
    console.log("Success");

  }else{
    router.push("/login")
    console.log("failed");
  }
})
 }
  return (
    <form className='text-center py-[12rem]' onSubmit={Login}>
        <p className="text-xl">Login</p>
       <div>
        <label className='bg-blue-500 px-7 py-3 rounded-md '>email</label>
<input onChange={(e)=>{
  setEmail(e.target.value)
}} className="px-2 input w-full max-w-xs" type="text" placeholder="Type here"  />
</div>
<div className='mt-3'>
    <label className='bg-blue-500 px-3 rounded-md py-3'>password</label>
<input onChange={(e)=>{
  setPassword(e.target.value)
}} type="password" placeholder="Type here" className="input w-full max-w-xs" />
</div>

<button type="submit"  className='bg-teal-500 px-4 mt-3 mb-2 rounded-md py-2 hover:bg-green-400'>Submit

</button>
<div>
    <p>Already have an account? <span onClick={()=>router.push("/signup")} className='text-red-500 cursor-pointer underline'>Signup</span></p>
   
</div>
    </form>
  )
}
