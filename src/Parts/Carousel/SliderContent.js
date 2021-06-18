import React from 'react'
import sliderImage from './sliderImage';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

export default function SliderContent(props) {
    return (
        <section>
            {
                sliderImage.map((slide, index) => {
                    return <div className={index === props.activeIndex ? "slides active" : "inactive"}>
                        <div className="overlay inset-0 bg-black opacity-50 z-10"></div>
                        <Zoom left>
                            <img className="slide-image" src={`/images/content/${slide.url}`} alt={slide.title} />
                        </Zoom>
                        <Slide left delay={1000}>
                        <h3 className="slide-title font-semibold md:text-4xl text-xl">{slide.title}</h3>
                        </Slide>
                        <Slide right delay={1000}>
                        <p className="slide-text font-medium md:text-xl text-sm">{slide.description}</p>
                        </Slide>
                    </div>
                })
            }
        </section>
    )
}
