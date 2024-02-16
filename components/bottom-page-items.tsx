import React from 'react'

const BottomItem = () => {
  return (
    <div className='flex mx-8 border-2 rounded-md h-36 bottom-10'>
      <div className=' border-r-2 flex flex-col p-4 hover:bg-slate-200 '> <p>From</p><h1 className=' text-4xl font-bold my-2'>Delhi</h1><p>DEL, Delhi Airport India</p></div>
      <div className=' border-r-2 flex flex-col p-4 hover:bg-slate-200'> <p>To</p><h1 className=' text-4xl font-bold my-2'>Bengaluru</h1><p>BLR, Bengaluru International Airport  India</p></div>
      <div className=' border-r-2 flex flex-col p-4 hover:bg-slate-200'> <p>Departure</p><h1 className=' text-xl font-bold my-2'>16 Feb 24</h1><p>Friday</p></div>
      <div className=' border-r-2 flex flex-col p-4 hover:bg-slate-200'> <p>Return</p><h1 className=' text-xl font-bold my-2'>17 Feb 24</h1><p>Saturday</p></div>
      <div className='  flex flex-col p-4  hover:bg-slate-200'> <p>Travellers & Class</p><h1 className=' text-2xl font-bold my-2'>1 Traveller</h1><p>Economy/Premium Economy</p></div>
      
    </div>
  )
}

export default BottomItem
