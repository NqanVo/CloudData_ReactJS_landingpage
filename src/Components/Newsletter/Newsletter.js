import React from 'react';

const Newsletter = () => {
    return (
        <section className='py-4 lg:py-16 px-4 text-white grid lg:grid-cols-3 gap-4'>
            <div className="lg:col-span-2">
                <h1 className='font-bold lg:text-3xl text-xl py-2'>Want tips & trick to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="lg:col-span-1">
                <form className='w-full flex flex-col lg:flex-row justify-between gap-4'>
                    <input type="email" placeholder='Enter Email' required className='flex-1 border-none outline-none px-4 rounded-md text-gray-700' />
                    <input type="submit" value="Notify Me" className='lg:w-[150px] w-full bg-[#00df9a] text-black rounded-md p-2 font-medium cursor-pointer' />
                </form>
                <p className='mt-4'>
                    <span className='block'>We care about the protection of your data. Read our</span>
                    <a href="#" className='text-[#00df9a] underline decoration-[#00df9a] block'>Privacy Policy</a>
                </p>
            </div>
        </section>
    );
};

export default Newsletter;