import React from 'react';
import Button from '../Button/Button';

const Card = (props) => {
    return (
        <div className='w-full'>
            <div className="w-full border flex flex-col justify-center items-center gap-6 py-6 shadow-xl rounded-xl hover:scale-105 duration-200">
                <img src={props.Image} alt="" className='w-20 mx-auto bg-white mt-[-3rem] object-cover' />
                <h1 className='text-2xl font-bold'>{props.NamePack}</h1>
                <h1 className='text-4xl font-bold'>${props.Price}</h1>
                <ul className='flex flex-col items-center font-medium block w-full'>
                    {
                        props.Content.map((item, index) => (
                            <li key={index} className='w-[80%] text-center p-2 border-b border-b-gray-300'>{item}</li>
                        ))
                    }
                </ul>
                <Button ColorBg='#00df9a' ColorText='#000000'>Get Trial</Button>
            </div>
        </div>
    );
};

export default Card;