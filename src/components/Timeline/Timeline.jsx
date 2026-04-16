import React, { useEffect, useState } from 'react'
import call from '../../../public/assets/call.png'
import text from '../../../public/assets/text.png'
import video from '../../../public/assets/video.png'
import { ToastContainer, toast } from 'react-toastify';

export const Timeline = () => {
    const [entries , setentries] =useState([])
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("timeline") || "[]")
        setentries(data)
    } , [])
  const icons = {
  Call: call,
  Text: text,
  Video: video
  }

  const [filter , setFilter ] = useState('All');
  const filtered = filter === "All" ? entries :
        entries.filter(entry => entry.type === filter)

  return (
    <>
    
    <div>
       <div className='container mx-auto  py-10 px-4'>
      
      <h1 className='text-[32px] font-bold text-[#244D3F] mb-6'>Timeline</h1>
      <select 
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
  className='border px-5 font-semibold py-2 rounded  w-fit'>
  <option value="All">All timeline</option>
  <option value="Call">Call</option>
  <option value="Text">Text</option>
  <option value="Video">Video</option>
  </select>
      {filtered .length === 0 ? (
        <p className='text-gray-500'>No interactions yet.</p>
      ) : ( 
        
        filtered.map((entry) => (
          <div key={entry.id} className='flex items-center gap-4 mt-6 py-4 border-b  bg-white shadow'>
            
            <img src={icons[entry.type]} className='w-8 h-8 ml-5' />

            <div>
              <p>
                <strong>{entry.type}</strong> with {entry.name}
              </p>
              <p className='text-gray-500 text-sm'>
                {new Date(entry.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric"
                })}
              </p>
            </div>

          </div>
        ))
      )}

    </div>
 
    </div>
    </>
  )
}
