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
    <>
    <h1 className='font-bold text-[#1F2937] text-2xl sm:text-3xl lg:text-[38px] lg:ml-50 mb-3 text-center lg:text-left'>
  Friendship Analytics
</h1>

<div className='container mx-auto w-full max-w-[1300px] h-auto lg:h-[600px] mb-8 shadow px-2'>
  <div className='py-6 sm:py-8 lg:py-10 px-2 sm:px-4 flex flex-col items-start'>

    <p className='text-[#244D3F] text-lg sm:text-xl font-semibold w-full text-center lg:text-left'>
      By Interaction Type
    </p>

    <div className='w-full flex justify-center'>
      <div className='w-full max-w-[400px]'>

        <PieChart width={350} height={350} className="sm:w-[400px] sm:h-[450px]">
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="100%"
            cornerRadius={50}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>

      </div>
    </div>

  </div>
</div>
    </>
   
  )
}