import React from 'react'
import { Link } from 'react-router-dom'
import Slide from 'react-reveal/Slide';


export default function Header() {
    return (
        <Slide bottom>
        <section className="flex items-center hero font-display">
            <div className="w-full absolute z-20 inset-0 md:relative md:w-1/2 text-center flex flex-col justify-center hero-caption">
                <h1 className="text-2xl md:text-4xl leading-tight font-medium  md:text-blue-900 text-white">
                    Mari bergabung bersama 
                    <br className="hidden lg:block" /> HIMTI Universitas Paramadina
                </h1>
                <div>
                    <Link to="/News" className="bg-green-500 text-white hover:bg-black hover:text-white rounded-full px-8 py-3 mt-8 inline-block flex-none transition duration-200">
                        Info lebih lanjut
                    </Link>
                </div>
            </div>
            <div className="w-full inset-0 md:relative md:w-1/2">
                <div className="relative hero-image">
                    <div className="overlay inset-0 bg-black opacity-50 z-10"></div>
                    <div className="overlay right-0 bottom-0 md:inset-0">
                        <button
                            className="video hero-cta focus:outline-none z-30 modal-trigger"
                            data-content='<div class="w-screen pb-56 md:w-96 md:pb-75 relative z-50">
                            <div class="absolute w-full h-full">
                            <iframe 
                            width="100%" 
                            height="100%" 
                            src="https://www.youtube.com/embed/f4eyqHP-kTw" title="YouTube video player" 
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                            gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                            </div>
                            </div>'
                        >
                        </button>
                    </div>
                    <img src="images/content/image-section-1.png" alt="section" className="absolute inset-0 md:relative w-full h-full object-cover object-center" />
                </div>
            </div>
        </section>
        </Slide>
    )
}
