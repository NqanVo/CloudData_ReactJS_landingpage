import React from 'react';

const Button = (props) => {
    return (
        <button className={`
        ${props.ColorBg}
        ${props.ColorText}
        w-[200px] 
        rounded-md 
        p-2 
        font-medium 
        text-xl 
        hover:opacity-80 duration-200
        `}>{props.children}</button>
    );
};

export default Button;