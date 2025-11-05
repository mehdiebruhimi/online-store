import React, { ReactComponentElement } from 'react';
import UserIcon from './icon/UserIcon';

export interface IOrderStep {
  id: number;
  title: string;
  icon: React.ReactElement;
  step: number;
}

const OrderState = ({ id, title, icon, step }: IOrderStep) => {
  return (
    <section className='flex flex-col items-center gap-2'>
        <div className={`w-14 h-14 p-4 ${step >= id ? 'bg-[#2F0D0C]' : 'bg-white border-2 border-[#EBEBEB]'} rounded-lg flex justify-center items-center`}>
            {icon}
        </div>
        <p className={`${step >= id ? 'text-[#130505]' : 'text-[#606060]'}`}>{title}</p>
    </section>
  )
}

export default OrderState