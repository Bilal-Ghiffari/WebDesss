import React from 'react'
import Navbar from 'Parts/NavbarHome';
import Header from 'Homepage/Header';
import BeritaHimti from 'Homepage/BeritaHimti';
import EventHimti from 'Homepage/EventHimti';
import useModal from 'Hooks/useModal';
import ApiHomePages from 'mockup-API/Api-Homepage.json';
import Footer from 'Parts/Footer';
import ApiBeritaHimti from 'mockup-API/Api-BeritaHimti.json';

export default function Homepages() {
    useModal();
    return (
        <>
            <Navbar  theme="white" position="absolute" />
            <Header />
            <BeritaHimti data={ApiBeritaHimti.beritahimti} />
            <EventHimti data={ApiHomePages.event} />
            <Footer />
        </>
    )
}
