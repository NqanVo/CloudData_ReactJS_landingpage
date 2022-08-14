import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillGithub, AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
    return (
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3 py-16 text-white px-4">
            <div className="lg:col-span-1 flex flex-col gap-4">
                <h1 className="text-[#00df9a] font-bold lg:text-3xl text-xl">CLOUD</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    deleniti repellendus numquam repudiandae quasi, perspiciatis quia
                    necessitatibus repellat obcaecati sapiente.
                </p>
                <ul className="flex gap-8">
                    <li><a href=""><AiFillFacebook className="text-2xl" /></a></li>
                    <li><a href="#"><AiFillInstagram className="text-2xl" /></a></li>
                    <li><a href="#"><AiFillTwitterSquare className="text-2xl" /></a></li>
                    <li><a href="#"><AiFillGithub className="text-2xl" /></a></li>
                    <li><a href="#"><AiFillYoutube className="text-2xl" /></a></li>
                </ul>
            </div>
            <div className="lg:col-span-2">
                <div className="grid lg:grid-cols-3 grid-cols-1">
                    <div className="col-span-1 flex flex-col gap-4">
                        <h3 className="font-bold text-xl">Solutions</h3>
                        <ul>
                            <li>About</li>
                            <li>Marketing</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                        </ul>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                        <h3 className="font-bold text-xl">About</h3>
                        <ul>
                            <li>Marketing</li>
                            <li>Blog</li>
                            <li>Blog</li>
                            <li>About</li>
                            <li>Marketing</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                        <h3 className="font-bold text-xl">Solutions</h3>
                        <ul>
                            <li>About</li>
                            <li>Marketing</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
