import React from 'react';
import Navbar from 'Parts/Navbar';
import Slider from 'Parts/Carousel/Slider';
import NewsItem from 'News/NewsItem';
import ApiNews from 'mockup-API/Api-News.json';
import Footer from 'Parts/Footer';
import Slide from 'react-reveal/Slide';


export default function AboutUs() {
    return (
        <>
            <Navbar theme="white" position="absolute" />
            <Slide bottom>
                <Slider />
            </Slide>
            <NewsItem data={ApiNews.news}/>
            <Footer />
        </>
    )
}
