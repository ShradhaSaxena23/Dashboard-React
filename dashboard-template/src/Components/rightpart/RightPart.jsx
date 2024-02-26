import React from 'react';
import ChartBar from './ChartBar';
import { CashIcon, CreditCardIcon } from "@heroicons/react/outline";
import { TodayInvestDB } from '../leftpart/utility/LeftPartdata';
import PortfolioItems from './PortfolioItems';

function RightPart() {
  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6">
      <div className="w-full items-start justify-start flex flex-col px-12 py-0 ">

      <h1 className="text-xl font-bold xl:text-xl"> Potential </h1>
      </div>
      <div className="md:flex items-center justify-center w-full lg:space-y-0 space-y-4  lg:space-x-4  px-12">
        <div className="space-y-6 w-full items-center justify-center flex flex-col">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CashIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2>On Time</h2>
            <h2 className="font-bold text-xl">$120.55</h2>
          </span>
        </div>
        <div className="space-y-6 w-full items-center justify-center flex flex-col">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CreditCardIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2>Round-Ups</h2>
            <h2 className="font-bold text-xl">$200.13</h2>
          </span>
        </div>
        <div className="px-12 py-2 items-center justify-start flex flex-col w-full">
          <ChartBar />
        </div>
      </div>
      
      <div className='w-full items-start justify-start flex flex-col px-12 py-6'>
        <h1 className='text-xl font-bold xl-text'>Portfolio detail</h1>
        <div className='flex item-center justify-center space-x-6 overflow-x-auto py-4 scrollbar-hide'>
          {TodayInvestDB.map((item) => (
            <PortfolioItems item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightPart;
