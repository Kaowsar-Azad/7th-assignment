import React, { use, useState } from 'react'
import { data, useParams } from 'react-router-dom';
import { RiDeleteBinLine } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { RiNotificationSnoozeFill } from "react-icons/ri";
import call from '../../../public/assets/call.png'
import text from '../../../public/assets/text.png'
import video from '../../../public/assets/video.png'
  import { toast } from 'react-toastify';


const Promise = fetch("/Friends.json").then((res) => res.json());
export const ProfileDetails = () => {
    const ProfileData = use(Promise)
     const {id} = useParams();
       const singleProfile =  ProfileData.find(item => item.id == id)
       const date = new Date(singleProfile.next_due_date)
       
const formattedDate = date.toLocaleDateString("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric"
})



const   handleAction = (type) => {
  const newEntry = {
    id: Date.now() ,
    type : type,
    name : singleProfile.name ,
     date: new Date().toISOString()

  };
  const existing = JSON.parse(localStorage.getItem("timeline") || "[]" );
  existing.unshift(newEntry);
  localStorage.setItem("timeline" , JSON.stringify(existing))
  toast.success(`${type} with ${singleProfile.name}`)
}



  return (
   <>
  <div className='flex flex-col lg:flex-row gap-5 container mx-auto py-10 lg:py-20 px-4 justify-center items-center lg:items-start'>
    
    <section className='flex flex-col items-center gap-4 w-full max-w-[280px]'>
      <div className='w-full h-auto py-6 shadow-2xl text-center flex flex-col space-y-3 rounded-2xl items-center justify-center mb-2'>
        <img src={singleProfile.picture}></img>
        <h1 className='font-bold text-[20px]'>{singleProfile.name}</h1>
        <div className='flex gap-2.5 flex-wrap justify-center px-2'>
          {
            singleProfile.tags.map((tag) => (
              <h2 className='bg-[#CBFADB] rounded-2xl px-3 py-1'>{tag}</h2>
            ))
          }
        </div>
        <h1 className={`text-white px-3 py-1 rounded-2xl
          ${
            singleProfile.status === "almost due" ? "bg-[#EFAD44]" :
            singleProfile.status === "overdue" ? "bg-[#EF4444]" :
            singleProfile.status === "on-track" ? "bg-[#244D3F]" : ''
          }`}>{singleProfile.status}</h1>
        <p className='text-[#64748B] text-[18px]'>"{singleProfile.bio}"</p>
        <h1 className='text-[#64748B] text-[18px]'>{singleProfile.email}</h1>
      </div>
      <div className='flex flex-col gap-3 w-full'>
        <button className='shadow-2xl w-full py-2 bg-white flex items-center justify-center gap-1.5 font-semibold'><RiNotificationSnoozeFill />Snooze 2 weeks</button>
        <button className='shadow-2xl w-full py-2 bg-white flex items-center justify-center gap-1.5 font-semibold'><FaArchive />Archive</button>
        <button className='shadow-2xl w-full py-2 bg-white flex items-center justify-center gap-1.5 text-red-700 font-semibold'><RiDeleteBinLine />Delete</button>
      </div>
    </section>

    <section className='w-full max-w-[900px]'>
      <div className='grid grid-cols-3 gap-3 sm:gap-5 text-center'>
        <div className='shadow-2xl p-5 sm:p-10 bg-white'>
          <h1 className='font-semibold text-[#244D3F] text-[22px] sm:text-[30px]'>{singleProfile.days_since_contact}</h1>
          <p className='text-[#64748B] text-[14px] sm:text-[18px]'>Days Since Contact</p>
        </div>
        <div className='shadow-2xl p-5 sm:p-10 bg-white'>
          <h1 className='font-semibold text-[#244D3F] text-[22px] sm:text-[30px]'>{singleProfile.goal}</h1>
          <p className='text-[#64748B] text-[14px] sm:text-[18px]'>Goal (Days)</p>
        </div>
        <div className='shadow-2xl  sm:p-10 bg-white'>
          <h1 className='font-semibold text-[#244D3F] text-[22px] sm:text-[30px]'>{formattedDate}</h1>
          <p className='text-[#64748B] text-[14px] sm:text-[18px]'>Next Due</p>
        </div>
      </div>

      <div className='shadow-2xl p-6 sm:p-10 bg-white mt-2.5 space-y-2'>
        <div className='flex justify-between items-center'>
          <h1 className='font-semibold text-[22px] sm:text-[30px] text-[#244D3F]'>Relationship Goal</h1>
          <button className='text-[#64748B] text-[16px] sm:text-[18px] px-3 py-2 border border-[#64748B] '>Edit</button>
        </div>
        <h2 className='text-[#64748B] text-[18px]'>Connect every <spen className='font-semibold text-[18px] text-black'>{singleProfile.goal} days</spen></h2>
      </div>

      <div className='shadow-2xl p-4 bg-white mt-2.5 space-y-2'>
        <h1 className='font-semibold text-[22px] sm:text-[30px] text-[#244D3F]'>Quick Check-In</h1>
        <div className='grid grid-cols-3 gap-3 sm:gap-5 text-center items-center'>
          <div onClick={() => handleAction("Call")}
           className='shadow-lg px-4 py-5 bg-[#E9E9E9]'>
            <img className='mx-auto' src={call}></img>
            <button className='text-[#64748B] text-[16px] sm:text-[18px]'>Call</button>
          </div>
          <div  onClick={() => handleAction("Text")}
          className='shadow-lg py-5 bg-[#E9E9E9]'>
            <img className='mx-auto' src={text}></img>
            <button className='text-[#64748B] text-[16px] sm:text-[18px]'>Text</button>
          </div>
          <div onClick={() => handleAction("Video")} 
          className='shadow-lg px-4 py-5 bg-[#E9E9E9]'>
            <img className='mx-auto' src={video}></img>
            <button className='text-[#64748B] text-[16px] sm:text-[18px]'>video</button>
          </div>
        </div>
      </div>
    </section>
    
  </div>
  
</>
   
  )
}
