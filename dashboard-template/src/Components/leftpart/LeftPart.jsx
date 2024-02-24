import React from 'react'
import { TodayInvestDB } from './utility/LeftPartdata';
import InvestList from './InvestList'
import Card from './Card';
function LeftPart() {
  return (
    <div className='col-span-2 min-h-[90vh] border-r border-gray-300 item-start justify-start flex-flex-col w-full'>
   
    <div className='w-full item-start justify-start flex flex-col px-12 py-6 '>
    <h1 className='font-bold '>Today's Investment</h1>
    <div className='w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide'>
   { TodayInvestDB.map((item)=>(
    <InvestList item={item} key={item.id}/>
     ) )}
    </div>
    <div className='grid justify-items-center  mt-10'>
      <Card/>
    </div>
    </div>
    </div>
  )
}

export default LeftPart

