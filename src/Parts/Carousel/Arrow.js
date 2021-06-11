import React from 'react';

export default function Arrow(props) {
    return (
        <div className="arrows">
            <span onClick={props.prevSlide}>
                <img className="prev" src="/image-icon/arrow-left.png" alt="Arrow-left" />
            </span>
            <span onClick={props.nexSlide}>
                <img className="Next" src="/image-icon/arrow-right.png" alt="Arrow-right" />
            </span>
        </div>
    )
}
