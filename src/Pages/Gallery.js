import Navbar from 'Parts/Navbar'
import React from 'react';
import GalleryItems from 'Gallery/Gallery';
import ApiGallery from 'mockup-API/Api-Gallery.json';
import Footer from 'Parts/Footer';

export default function Gallery() {
    return (
        <>
            <Navbar theme="white" />
            <GalleryItems data={ApiGallery.gallery} />
            <Footer />
        </>
    )
}
