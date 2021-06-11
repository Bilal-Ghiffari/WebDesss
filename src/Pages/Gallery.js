import Navbar from 'Parts/Navbar'
import React from 'react';
import GalleryItems from 'Gallery/GalleryItems';
import ApiGallery from 'mockup-API/Api-Gallery.json';

export default function Gallery() {
    return (
        <>
            <Navbar theme="white" />
            <GalleryItems data={ApiGallery.gallery} />
        </>
    )
}
