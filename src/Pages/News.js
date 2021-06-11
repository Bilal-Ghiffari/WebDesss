import React from 'react';
import Navbar from 'Parts/Navbar';
import Slider from 'Parts/Carousel/Slider';
import NewsItem from 'News/NewsItem';
import ApiNews from 'mockup-API/Api-News.json';
import Footer from 'Parts/Footer';

export default function AboutUs() {
    return (
        <>
            <Navbar theme="white" position="absolute" />
            <Slider />
            <NewsItem data={ApiNews.news}/>
            <Footer />
        </>
    )
}
