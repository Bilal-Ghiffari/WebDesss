import React from 'react';
import sliderImage from './sliderImage';


export default function Dots(props) {
    return (
        <div className="all-dots">
            {
                sliderImage.map((slide, index) => {
                    return <span key={index} className={props.activeIndex === index ? "dot active-dot" : "dot"}
                        onClick={(event) => props.onclick((event.target.value) = index)}
                    >
                    </span>
                })
            }
        </div>
    )
}
