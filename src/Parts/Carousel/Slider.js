import React, {useState, useEffect} from 'react';
import Arrow from './Arrow';
import SliderImage from './sliderImage';
import Dots from './Dots';
import SliderContent from './SliderContent';

export default function Slider() {

    const len = SliderImage.length - 1;
    // console.log(len);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => {
            clearInterval(interval);
        }
    }, [activeIndex, len]);

    return (
        <div className="slider-container mt-10 font-display">
            <SliderContent activeIndex={activeIndex} />
            <Arrow 
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1 )}
                nexSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)}
            />
            <Dots activeIndex={activeIndex} onclick={(ActiveIndex) => setActiveIndex(ActiveIndex)} />
        </div>
    )
}



