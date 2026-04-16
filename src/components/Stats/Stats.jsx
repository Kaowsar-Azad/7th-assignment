import React from 'react'
import { Pie, PieChart, Legend, Cell } from 'recharts';

export const Stats = () => {

  
  const timeline = JSON.parse(localStorage.getItem("timeline") || "[]")

  
  const callCount = timeline.filter(e => e.type === "Call").length
  const textCount = timeline.filter(e => e.type === "Text").length
  const videoCount = timeline.filter(e => e.type === "Video").length

  
  const data = [
    { name: 'Call', value: callCount },
    { name: 'Text', value: textCount },
    { name: 'Video', value: videoCount },
  ]

  const COLORS = ['#244D3F', '#7C3AED', '#22C55E']

  return (
    <><h1 className='font-bold text-[#1F2937] text-[38px]  ml-50 mb-3'>
        Friendship Analytics
      </h1>
       <div className='container mx-auto  w-[1300px] h-[600px]  mb-8 shadow'>
        <div className=' py-10 px-4 flex flex-col items-start'>
      
      <p className='text-[#244D3F] text-[20px] font-semibold w-full'>By Interaction Type</p>

      <div className='container mx-auto place-items-center'>
        <PieChart  width={400} height={450}>
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
         <Legend/>
      </PieChart>
      </div>

    </div>
       </div>
    </>
   
  )
}