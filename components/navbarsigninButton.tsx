import { Plane } from 'lucide-react'
import React from 'react'

interface Signin {
    label:string,
    subTitile:string,
}

const NavbarsigninButton = ({label,subTitile}:Signin) => {
  return (
    <div className='gap-4 flex  rounded-sm p-1 bg-white'>
      <div>  <Plane className=' text-blue-700 w-8 h-8 mt-2'/></div>
      <div className='flex flex-col'>
      <button>{label} </button>
       <button className=' me-28'>{subTitile}</button>  
      </div>
      
    </div>
  )
}

export default NavbarsigninButton
