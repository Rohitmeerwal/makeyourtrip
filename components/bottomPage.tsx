import { Plane } from 'lucide-react'
import React from 'react'
import RadioButton from './radio-button'
import BottomItem from './bottom-page-items'

const radiobtn =[
  {
    label:"One Way" ,
    option:"1"
  },
  {
    label:"Round Trip",
    option:"2"
  },
  {
    label:"Multi City" , 
    option:"3"
  },
]
const radio2btn =[
  {
    label:"Regular Fares" ,
    option:"1" 
  },
  {
    label:"Armed Forces Fares" ,
    option:"2" 
  },
  {
    label:"Student Fares"  ,
    option:"3"
  },
  {
    label:"Senior Citizen Fares"  ,
    option:"4"
  },
  {
    label:"Doctors & Nurses Fares" ,
    option:"5" 
  },
  {
    label:"Double Seat Fares"  ,
    option:"6"
  },
]

const BottomPage = () => {
  return (

    <div className="flex relative  flex-col justify-center w-full items-center my-24">
        <div className="flex justify-center items-center ">
            <div className=" bg-white p-4 shadow-2xl rounded-md z-[80]"> <Plane className=' text-red-600 w-32 h-16 '/> <p className='text-center text-xl'>Flight</p></div>
            
        </div>
        
        <div className=" relative bottom-10  rounded-xl shadow-2xl  bg-white h-96 w-3/4">
         
          <div className='flex justify-between '>  
          <div><RadioButton label={radiobtn} className='flex my-12 gap-6 px-14'   /></div>
          <div><p className='my-12 pe-5'>Book International and Domestic Flights</p></div>
          </div>

          <div> <BottomItem/></div>

          <div className='flex  my-5 px-10 text-sm'>
            <p className=' max-w-20 max-h-8  font-semibold'>Select A
              Fare Type:</p>
              <div className=''> <RadioButton label={radio2btn} className="flex gap-4 bg-slate-200 p-4 "/></div>
            
          </div>
          <div className="flex relative justify-center items-center">
            <div className=" bg-blue-500 hover:bg-blue-700 p-2 shadow-2xl text-white text-center w-56 rounded-3xl text-2xl  z-[80]"><button>SEARCH</button></div>
            
            </div>
        </div> 

    </div>
  )
}

export default BottomPage
