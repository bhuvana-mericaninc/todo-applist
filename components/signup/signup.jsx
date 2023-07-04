"use client"
import { db } from "../../utils/Firebase"
import { collection, addDoc } from "firebase/firestore"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const Signup = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        confirmpassword: "",
        firstname: "",
        lastname: "",
        
      });
    const router = useRouter();
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
           
            const docRef = await addDoc(collection(db,"users"),{
                email:userData.email,
        password: userData.password,
        confirmpassword: userData.confirmpassword,
        firstname: userData.firstname,
        lastname: userData.lastname,
                    })
            await router.push("/login");
            await setUserData({
                email: "",
                password: "",
                confirmpassword: "",
                firstname: "",
                lastname: "",
                
              })
            
        }catch(error){
            console.error("error adding document: ",e);
        }
    }

  return (

            <form className='text-center py-[12rem] ' onSubmit={handleSubmit}>
        <p className="text-xl">Signup</p>
        <div className='mt-3'>
        <label className='bg-blue-500 px-7 py-3 rounded-md m '>Firstname</label>
<input className="px-2 input w-full max-w-xs" type="text" placeholder="Type here" required onChange={(e)=> setUserData({...userData,firstname:e.target.value})} />
</div>
<div className='mt-3'>
        <label className='bg-blue-500 px-7 py-3 rounded-md '>Lastname</label>
<input className="px-2 input w-full max-w-xs" type="text" placeholder="Type here" required onChange={(e)=> setUserData({...userData,lastname:e.target.value})} />
</div>
       <div className='mt-3'>
        <label className='bg-blue-500 px-12 py-3 rounded-md '>email</label>
<input onChange={(e)=> setUserData({...userData,email:e.target.value})} className="px-2 input w-full max-w-xs" type="email" placeholder="Type here" required  />
</div>
<div className='mt-3'>
    <label className='bg-blue-500 px-8 rounded-md py-3'>password</label>
<input onChange={(e)=> setUserData({...userData,password:e.target.value})} type="password" placeholder="Type here"  required className="input w-full max-w-xs" />
</div>
<div className='mt-3'>
    <label className='bg-blue-500 px-1 rounded-md py-3'> confirm password</label>
<input type="password" placeholder="Type here" required className="input w-full max-w-xs" onChange={(e)=> setUserData({...userData,cpassword:e.target.value})}/>
</div>

<button type="submit"  className='bg-blue-500 px-4 mt-4 mb-3 rounded-md py-2 hover:bg-green-400'>registered

</button>
<div>
    <p>Already have an account? <span onClick={()=>router.push("/login")} className='text-red-500 cursor-pointer underline'>Login</span></p>
   
</div>
    </form>

    
  )
}
