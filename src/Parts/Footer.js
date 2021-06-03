import React, {useState} from 'react';

function FooterLinks({isActive, setActive, children, title}) {
    return (
        <div className="px-auto w-full md:w-3/12 mb-2 md:mb-0 accordion">
            <h5 className="text-lg font-semibold mb-2 relative text-white">
                {title}
            <button
                onClick = {() => setActive(isActive)}
                className={["absolute block md:hidden right-0 transform -translate-y-1/2 focus:outline-none transition duration-200 top-1/2",
                isActive ? "rotate-0" : "rotate-180"
            ].join(" ")}
            >
            <svg width="20" height="9" viewBox="0 0 20 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9.75 7.5L18.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
            </h5>
            <ul
                className={["md:h-auto md:visible md:opacity-100 overflow-hidden transition duration-200", 
                isActive ? "h-0 invisible opacity-0" : "opacity-100"
            ].join(" ")}
            >
                {children}
            </ul>
        </div>
    );
}


export default function Footer(){
    const [active, setActive] = useState(null)
    return (
        <section className="sitemap bg-blue-900 font-display">
            <div className="py-12 mt-16 px-6">
                <div className="flex justify-center mb-8 md:hidden">
                    <img src="/images/content/logo-footer.png" alt="Logo-mobile" />
                </div>
                <aside className="container mx-auto">
                    <div className="flex flex-wrap -mx-5 justify-center">
                        <ul className="md:w-3/12">
                            <li>
                                <img className="md:flex md:justify-center md:mb-4 hidden" src="/images/content/logo-footer.png" alt="Logo Footer" />
                            </li>
                        </ul>
                        <FooterLinks
                            setActive={setActive}
                            isActive={active === 2 ? null : 2}
                            title="Contact Us"
                        >
                            <li>
                                <p className="py-1 block text-gray-600"><i className="ri-phone-line ri-xl"></i> (021) 79181188</p>
                            </li>
                            <li>
                                <p className="py-1 block text-gray-600"><i className="ri-mail-line ri-xl"></i> himti.univparamdina@gmail.com</p>
                            </li>
                        </FooterLinks>

                        <FooterLinks
                            setActive={setActive}
                            isActive={active === 3 ? null : 3}
                            title="Address"
                        >
                            <li>
                                <a href="https://www.google.com/maps/place/Paramadina+University/@-6.241133,106.8308091,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69f3c398b48d51:0x2a232e58c9357e8f!8m2!3d-6.241133!4d106.8329978" target="_blank" rel="noopener noreferrer">
                                    <p className="py-1 block text-gray-600"><i className="ri-map-pin-2-line ri-xl"></i> Jl. Gatot Subroto No.Kav. 97, RT.4/RW.4, Mampang Prpt., Kec.Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12790</p>
                                </a>
                            </li>
                        </FooterLinks>

                        <FooterLinks
                            setActive={setActive}
                            isActive={active === 4 ? null : 4}
                            title="Connect With Us"
                        >
                            <li>
                                <div className="social-links">
                                    <a href="https://www.instagram.com/himtiparamadina/?hl=en" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-instagram-line ri-2x"></i>
                                    </a>
                                    <a href="https://twitter.com/himtiparamadina?lang=en" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-twitter-line ri-2x"></i>
                                    </a>
                                    <a href="https://www.facebook.com/himti.univparamadina/?hc_ref=ARRYyRLpbQh1_1HriZg66NwX2eGQyJ6uj00WsF8jyQRoywzr03iu2aRzbEV9SbxTFj8&fref=nf&__tn__=kC-R" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-facebook-fill ri-2x"></i>
                                    </a>
                                </div>
                            </li>
                        </FooterLinks>
                    </div>
                </aside>
            </div>
        </section>
    )
}
