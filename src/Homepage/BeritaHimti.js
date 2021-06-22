import React from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';

export default function BeritaHimti({data}) {
    // Grid
    const ratioClassName = {
        wrapper: {
            mobile: {
                "1/3": "cols-span-3 rows-span-1",
            },
            md: {
                "1/1": "cols-span-1 rows-span-1"
            }
        }
    }


    return (
        <section className="flex bg-gray-100 mt-10 font-display py-16 px-4">
            <Slide bottom>
            <div className="container mx-auto">
                <div className="flex flex-start mb-4">
                    <h3 className="md:text-3xl text-2xl text-blue-900 capitalize font-semibold">
                        Berita HIMTI
                    </h3>
                </div>
                <div className="grid grid-rows-1 md:grid-cols-3 grid-cols-1 gap-4">
                    {
                        data.map((item) => {
                            return <div key={item.id} className={`mb-8 md:mb-0 ${ratioClassName?.wrapper?.mobile?.[item.ratio.mobile]} ${ratioClassName?.wrapper?.md?.[item.ratio.md]}`}>
                                <Slide bottom delay={300 * item.index}>
                                <Link to={`/News/${item.url}/${item.title}/${item.id}`}>
                                    <div className="relative">
                                        <img className="rounded-t-lg" src={`images/content/${item.imgUrl}`} alt="imageBeritaHimti" />
                                        <div className="image-overlay absolute">
                                            <span><i className="ri-link ri-lg"></i> Read More</span>  
                                        </div>
                                    </div>
                                    <div className="bg-green-500 card-shadow z-10">
                                        <div className="text-white">
                                            <h4 className="flex justify-center py-5 capitalize">{item.title}</h4>
                                        </div>
                                    </div>
                                </Link>
                                </Slide>
                            </div>
                        })
                    }
                </div>
            </div>
            </Slide>
        </section>
    )
}
