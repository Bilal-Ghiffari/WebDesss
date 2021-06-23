import React from 'react';
import SliderImage from './SliderData';
import { SRLWrapper } from "simple-react-lightbox";



export default function GalleryItem() {
    const ratioClassName = {
        wrapper: {
            mobile: {
                "1/6": "cols-span-6 rows-span-1",
            },
            md: {
                "1/4": "cols-span-4 rows-span-1", 
            }
        }
    }


    return (
        <section className="my-10 font-display">
            <div className="container mx-auto">
                <div className="my-5 flex justify-center">
                    <h2 className="text-3xl font-semibold text-blue-900 uppercase">album pelaksanaan asig 13</h2>
                </div>
                <div className="flex justify-center">
                    <h2 className="text-xl font-light text-blue-900">32 Februari 5030</h2>
                </div>
                <SRLWrapper>
                <div className="grid grid-rows-1 md:grid-cols-4 grid-cols-2 gap-3 mt-14">
                    {
                        SliderImage.map((slide, index) => {
                            return (
                                <div key={index} className={` ${ratioClassName?.wrapper?.mobile?.[slide.ratio.mobile]} ${ratioClassName?.wrapper?.md?.[slide.ratio.md]}`}>
                                    <div className="images-gallery">
                                        <figure>
                                            <img src={`/images/content/${slide.url}`} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                </SRLWrapper>
            </div>
        </section>
    )
}
