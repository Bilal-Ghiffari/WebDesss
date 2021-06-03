import React from 'react';
import Navbar from 'Parts/Navbar';
import Header from 'News/Header';
import NewsItem from 'News/NewsItem';
import ApiNewsItem from 'mockup-API/Api-NewsItem.json';
import Footer from 'Parts/Footer';

export default function AboutUs() {
    return (
        <>
            <Navbar theme="white" position="absolute" />
            <Header />
            <NewsItem data={ApiNewsItem.news}/>
            <Footer />
        </>
    )
}
