import React from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react';

const StyleUlMenu = (openMenu) => `${!openMenu ? 'hidden' : 'flex'} flex animate-LeftToRight flex-col uppercase lg:animate-none lg:bg-transparent lg:flex lg:flex-row lg:static lg:h-auto lg:w-auto lg:border-none lg:py-0 lg:mx-0 fixed top-0 h-screen pt-24 px-4 border-r bg-[#000300] border-r-gray-800 w-[60%] left-0`;
const StyleLiLink = 'block border-b border-b-gray-800 p-4 cursor-pointer hover:text-[#00df9a] transition-all lg:border-none';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <nav className='flex justify-between items-center h-24 text-white px-4'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] z-50'>CLOUD</h1>
            <ul className={StyleUlMenu(openMenu)}>
                <li className={StyleLiLink}>Home</li>
                <li className={StyleLiLink}>Company</li>
                <li className={StyleLiLink}>Resources</li>
                <li className={StyleLiLink}>About</li>
                <li className={StyleLiLink}>Contact</li>
            </ul>
            <span>
                {
                    !openMenu ? <AiOutlineMenu className='text-2xl cursor-pointer lg:hidden' onClick={() => setOpenMenu(!openMenu)} />
                        : <AiOutlineClose className='text-2xl cursor-pointer lg:hidden' onClick={() => setOpenMenu(!openMenu)} />
                }
            </span>
        </nav>
    );
};

export default Navbar;