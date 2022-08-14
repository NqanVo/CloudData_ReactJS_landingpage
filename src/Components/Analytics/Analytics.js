import React from 'react';
import Button from '../Button/Button';

const Reponsive = 'container max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'
const Analytics = () => {
    return (
        <section className={`${Reponsive} grid lg:grid-cols-2 lg:justify-center lg:items-center`}>
            <img src="https://github.com/fireclint/data-finance-react-tailwind/blob/main/src/assets/laptop.jpg?raw=true" alt="" className='w-[500px] mx-auto my-4' />
            <div className="p-4 flex flex-col gap-2 lg:gap-4">
                <span className='font-bold lg:text-xl text-[#00df9a] uppercase'>Data Analytics dashboard</span>
                <h1 className='font-bold lg:text-2xl uppercase'>Manage data Analytics centrally</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti officiis consequuntur, a beatae ea, qui sunt debitis voluptate voluptas ipsa perferendis suscipit, eum eveniet amet accusantium iure sapiente earum magnam.
                </p>
                <Button ColorBg='black' ColorText='#00df9a'>Get Started</Button>
            </div>
        </section>
    );
};

export default Analytics;