import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


export default function Navbar({theme, position}) {
    return (
        <header className={[position, "w-full z-20 px-5 font-display"].join(" ")}>
            <div className="container mx-auto py-5">
                <Slide top>
                <div className="flex flex-stretch items-center">
                <div className="w-56 items-center flex">                   
                    <Link to="/" >
                        <img  src="images/content/logo.png" alt="Logo-Himti-Home" />
                    </Link>
                </div>
                <div className="w-full"></div>
                <div className="w-auto md:py-5">
                    <ul className="fixed bg-white inset-0 flex flex-col invisible items-center justify-center opacity-0 md:visible md:flex-row md:bg-transparent md:relative md:opacity-100 md:flex md:items-center md:mb-1 font-normal" id="menu">
                        <li className="mx-6 py-6 md:py-0">
                            <NavLink exact to="/" activeClassName="main-nav-active" className={[theme === "white" ? "text-black md:text-white hover:underline" : "text-white md:text-black hover:underline"].join(" ")}>
                                HOME
                            </NavLink>
                        </li>
                        <li className="mx-6 py-6 md:py-0">
                            <NavLink to="/News" activeClassName="main-nav-active" className={[theme === "white" ? "text-black md:text-white hover:underline" : "text-white md:text-black hover:underline"].join(" ")}>
                                NEWS
                            </NavLink>
                        </li>
                        <li className="mx-6 py-6 md:py-0">
                            <NavLink to="/Gallery" activeClassName="main-nav-active" className={[theme === "white" ? "text-black md:text-white hover:underline" : "text-white md:text-black hover:underline"].join(" ")}>
                                GALLERY
                            </NavLink>
                        </li>
                        <li className="mx-6 py-6 md:py-0">
                            <NavLink to="/AboutUs" activeClassName="main-nav-active" className={[theme === "white" ? "text-black md:text-white hover:underline" : "text-white md:text-black hover:underline"].join(" ")}>
                                ABOUT
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </div>
                </Slide>
            </div>
        </header>
    )
}
