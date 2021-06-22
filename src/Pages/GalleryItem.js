import React from 'react';
import Navbar from 'Parts/Navbar';
import Header from 'Gallery/GalleryItems/Header';
import GalleryImage from 'Gallery/GalleryItems/GalleryItem';
import Footer from 'Parts/Footer';


export default function GalleryItem() {
    return (
        <>
            <Navbar theme="white" position="absolute" />
            <Header />
            <GalleryImage />
            <Footer />
        </>
    )
}
