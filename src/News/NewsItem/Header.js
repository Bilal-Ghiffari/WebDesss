import React from 'react';
import { Link } from 'react-router-dom';


export default function Header({data}) {
    const d = new Date();
    const listMonths = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    const date = d.getDate();
    const month = listMonths[d.getMonth()];
    const year = d.getFullYear();
    return (
        <section className="font-display">
            <div className="container mx-auto">
                <div className="mt-20 flex justify-center">
                    <h3 className="uppercase text-blue-900 text-4xl font-semibold">ASIG Himti Paramadina</h3>
                </div>
                <div className="mt-14">
                    <img className="w-full h-96 object-cover object-center" src="/images/content/image-event-1.png" alt="" />
                </div>
                <div className="mt-8 flex justify-center">
                    <h3 className="text-blue-900 text-xl font-light">Jakarta, {`${date} ${month} ${year}`}</h3>
                </div>
                <div className="mt-10">
                    {
                        data.map((item) => {
                            return <div key={item.id}>
                                        <h2 className="my-4 font-semibold text-xl text-blue-900">{item.title}</h2>
                                        <p className="leading-8 text-gray-700" >{item.description}</p>
                                    </div>
                        })
                    }
                </div>
                <div className="flex md:justify-start justify-center">
                    <Link to="/News" className="capitalize my-12 bg-green-500 text-white hover:bg-black hover:text-white rounded-lg px-8 py-3 inline-block flex-none transition duration-200 ">
                        back to news
                    </Link>
                </div>
            </div>
        </section>
    )
}
