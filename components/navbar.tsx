import { cn } from '@/lib/utils'
import { ActivitySquare, Briefcase, FolderKey, Luggage } from 'lucide-react'
import React from 'react'
import NavbarsigninButton from './navbarsigninButton'


const icons  =[  
    {
     icon:FolderKey,
     bgColor: 'text-red-500/10',
     color:"text-yellow-500",
     label: "List Your Property",
     subLabel:"Start earning today!",
    },
    {
        icon: Briefcase,
        bgColor: 'text-red-500/10',
        color:"text-red-500",
        label: "Introducing myBiz",
        subLabel:"Business Travel Solution",
       },
    {
        icon: Luggage,
        bgColor: 'text-brown-500/10',
        color:" text-blue-800",
        label: "My Trips",
        subLabel:"Manage your bookings",
       },
]
const Navbar = () => {
  return (
    <div className='flex p-5 bg-slate-800' >
        <div className=" mx-24 w-36">
          <img src="logo.png" alt="logo" />
        </div>
        <div className=' gap-4 flex ps-44'>
            {icons?.map((icon)=>(
                    <div key={icon.label} className='flex gap-4 rounded-sm p-1 bg-white'>
                        <icon.icon className={cn("w-10 h-10 p-1", icon.color)} />
                        <div className='flex flex-col text-sm'>
                        <p className=' text-dark'> {icon.label} </p>
                        <p className='text-dark '> {icon.subLabel}</p>                                                  
                        </div>
                    </div>             
            ))}
            <NavbarsigninButton label='Create Your Account /' subTitile='Login'/> 

        </div>
    </div>
  ) 
}

export default Navbar
