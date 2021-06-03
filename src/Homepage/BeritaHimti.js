import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

export default function BeritaHimti() {
    return (
        <section className="flex bg-gray-100 mt-10 font-display py-16 px-4">
                <Slide bottom>
            <div className="container mx-auto">
                <div className="flex flex-start mb-4">
                    <h3 className="md:text-3xl text-2xl text-blue-900 capitalize font-semibold">
                        Berita Himti
                    </h3>
                </div>
                <Slide bottom delay={300}></Slide>
                <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="row-span-1 md:col-span-1 mb-8 md:mb-0" id="1">
                        <img className="rounded-t-lg" src="images/content/image-berita-1.png" alt="berita 1" />
                        <div className="bg-green-500 card-shadow">
                            <div className="text-white">
                                <Link to="/news-item">
                                    <h4 className="flex justify-center py-5 capitalize">pelaksanaan kobit 2021</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 md:col-span-1 mb-8 md:mb-0" id="2">
                        <img className="rounded-t-lg" src="images/content/image-berita-2.png" alt="berita 1" />
                        <div className="bg-green-500 card-shadow">
                            <div className="text-white">
                                <Link to="/news-item">
                                    <h4 className="flex justify-center py-5 capitalize">pelaksanaan acara resmi reformatics 2021</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 md:col-span-1" id="3">
                        <img className="rounded-t-lg" src="images/content/image-berita-3.png" alt="berita 1" />
                        <div className="bg-green-500 card-shadow">
                            <div className="text-white">
                                <Link to="/news-item">
                                    <h4 className="flex justify-center py-5 capitalize">pelaksanaan acara IP routing 2021</h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Slide>
        </section>
    )
}
