import React from 'react'

export default function GalleryItem() {
    return (
        <section className="font-display">
            <div className="relative">
                <div className="overlay inset-0 bg-black opacity-35 z-10"></div>
                <img src="/images/content/header-gallery 2.png" alt="header-gallery" />
                <div className="absolute z-10 bottom-40 pl-20">
                    <h2 className="uppercase text-5xl text-gray-600 font-semibold">photo gallery</h2>
                </div>
            </div>
        </section>
    )
}
