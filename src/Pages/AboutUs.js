import React from 'react';
import Header from 'AboutUs/header';
import Navbar from 'Parts/Navbar';
import HistoryHimti from 'AboutUs/HistoryHimti';
import Footer from 'Parts/Footer';
import {Parallax} from 'react-parallax';


export default function AboutUs() {
    return (
        <>
            <Navbar theme="white" position="absolute" />
                    <Parallax bgImage="/images/content/parallax1.jpg" bgClassName="parallax-custom" strength={600}>
                        <Header />
                        <HistoryHimti />
                        <Footer />
                    </Parallax>
            
        </>
    )
}
