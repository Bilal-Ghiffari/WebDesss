import React from 'react';
import Jump from 'react-reveal/Jump';




export default function header() {
    return (
        <section className="pt-48 font-display">
            <div className="container mx-auto">
                <Jump>
                <div className="flex justify-center">
                    <img style={{width: 247, height: 112}} src="/images/content/logohimti_2.png" alt="LogoaAboutUs" />
                </div>
                <div className="flex justify-center mt-7">
                    <h3 className="capitalize font-semibold text-2xl text-blue-900">himti universitas paramadina</h3>
                </div>
                </Jump>
                    <div className="flex flex-wrap mt-24 bg-blue-900 rounded-lg">
                        <div className="md:w-1/2 mt-6">
                            <div className="flex justify-center">
                                <h2 className="uppercase text-3xl font-bold text-white">visi</h2>
                            </div>
                            <div className="mt-6 flex justify-center">
                            <h3 className="font-normal text-gray-600 text-base break-all px-2 md:my-12">
                                Menjadikan Himti Paramadina sebagai tempat yang mendukung segala <br />minat dan bakat seluruh anggota serta menjadi himpunan
                                yang berperan <br />aktif baik pada Akademik  maupun non-Akademik, berjiwa kreatif serta <br />mendukung kemajuan riset dibidang Informatika 
                            </h3>
                            </div>
                        </div>
                        <div className="md:w-1/2 mt-6 mb-8">
                            <div className="flex justify-center">
                                <h2 className="uppercase text-3xl font-bold text-white">misi</h2>
                            </div>
                            <div className="mt-6 flex justify-center">
                            <ul className="md:list-disc">
                                <li className="font-normal text-gray-600 text-base">
                                    Meningkatkan rasa kekeluargan seluruh anggota serta menjalin <br />relasi baik dengan Program Studi Teknik Informatika, Kampus, <br />maupun dengan Alumni
                                </li>
                                <li className="font-normal text-gray-600 text-base">
                                    Meningkatkan eksistensi HIMTI Paramadina baik di <br />Internal maupun Eksternal
                                </li>
                                <li className="font-normal text-gray-600 text-base">
                                    Melaksanakan Pengabdian Masyarakat sebagai usaha dalam <br />mendukung kemajuan di bidang Informatika
                                </li>
                                <li className="font-normal text-gray-600 text-base">
                                    Melaksanakan dan atau mengikuti kegiatan yang dapat <br />meningkatkan minat dan bakat seluruh anggota
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}
