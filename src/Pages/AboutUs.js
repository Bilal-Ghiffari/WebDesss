import React from 'react';
import Header from 'AboutUs/header';
import Navbar from 'Parts/Navbar';
import HistoryHimti from 'AboutUs/HistoryHimti';
import Footer from 'Parts/Footer';


export default function AboutUs() {
    return (
        <>
            <Navbar theme="white" position="absolute" />
            <Header />
            <HistoryHimti />
            <Footer />
        </>
    )
}
