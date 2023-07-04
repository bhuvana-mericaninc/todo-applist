"use client"
import { Todo } from '@/components/todo/todo';
import { Navbar } from '../../components/navbar/navbar'
import { useRouter } from 'next/navigation'
 const  Page = () => {
    const router= useRouter();
  return (
    <div> 
      <Navbar />
    <Todo />
    </div>
  )
}
export default Page;