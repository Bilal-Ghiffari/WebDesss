import React from 'react';
import Header from 'News/NewsItem/Header';
import Navbar from 'Parts/Navbar';
import ApiNewsItem from 'mockup-API/Api-NewsItem.json';
import Footer from 'Parts/Footer';

export default function NewsItem() {
    return (
        <>
            <Navbar theme="white"/>
            <Header data={ApiNewsItem.newsitem} />
            <Footer />
        </>
    )
}
