import React from 'react'

export default function Header() {
    return (
        <section className="md:pt-10 pt-28 font-display">
            <div className="relative flex flex-wrap">
                <div className="overlay inset-0 bg-black opacity-50 z-10"></div>
                <img className="w-full object-cover object-center" src="/images/content/images-news.png" alt="image-Berita" />
                <div className="absolute flex justify-center inset-x-0 md:inset-y-72 inset-y-16">
                    <h2 className="md:text-3xl text-xl uppercase text-white font-semibold z-20">
                        news himti
                    </h2>
                </div>
            </div>
        </section>
    )
}
