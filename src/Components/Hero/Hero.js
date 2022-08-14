import React from 'react';
import Typed from 'react-typed';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <section className='text-white h-screen flex flex-col justify-center items-center -mt-24'>
            <p className='font-medium lg:text-2xl p-2 text-[#00df9a]'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='font-bold text-3xl lg:text-[60px] p-2 lg:p-6'>Grow with data.</h1>
            <p className='font-medium lg:text-2xl p-2'>
                <span>Fast, flexible financing for </span>
                <Typed
                    strings={[
                        'BTB',
                        'BTC',
                        'SASS'
                    ]}
                    typeSpeed={100}
                    backSpeed={80}
                    loop>
                </Typed>
            </p>
            <p className='font-medium lg:text-2xl p-4 text-center text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quisquam vitae ad quas neque recusandae odio aperiam praesentium mollitia est eaque magnam architecto qui!</p>
            <Button ColorBg='bg-[#00df9a]' ColorText='text-[#000000]'>Get Started</Button>
        </section>
    );
};

export default Hero;