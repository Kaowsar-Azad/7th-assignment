import React from 'react'
import { use } from 'react';
import { Link} from 'react-router-dom';


const Promise = fetch("/Friends.json").then((res) => res.json());
export const AllProfile = () => {
       const ProfileData = use(Promise)
      
  return (
    <>
    <h1 className='font-bold text-[#1F2937] text-[28px] sm:text-[36px] md:text-[48px] ml-19 mt-2.5 mb-2.5'>Your Friend</h1>
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto px-4 place-items-center'>
      {
        ProfileData.map((details)=> (
          <Link to={`/profile/${details.id}`}
           className='w-[260px] h-[280px]  shadow-2xl text-center flex flex-col space-y-3  rounded-2xl items-center justify-center mb-6'>
            <img src={details.picture}></img>
            <h1 className='font-bold text-[20px]'>{details.name}</h1>
            <h2 className='text-[#64748B] '>{details.days_since_contact}H ago</h2>
           
              <div className='flex gap-2.5 '>
               {
                details.tags.map((tag) => (
                  <h2 className='  bg-[#CBFADB] rounded-2xl px-3 py-1' >{tag}</h2>
                ))}
              </div>
                <h1 className={`text-white px-3 py-1 rounded-2xl
                  ${
                    details.status === "almost due" ?  "bg-[#EFAD44] " :
                     details.status === "overdue" ?  " bg-[#EF4444]" :
                      details.status === "on-track" ?  "bg-[#244D3F] " : ''
                  }`}>{details.status}</h1>
          </Link>
        ))
      }
    </div>
    </>
  ) 
}
