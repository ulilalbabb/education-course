import Navbar from "../Components/Elements/Navbar/Navbar"
import Button from "../Components/Elements/Button/Button"
import { GrDocumentVerified, GrDocumentUser } from "react-icons/gr";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdEditDocument } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { SlGlobe } from "react-icons/sl";

const DetailProducts = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-primary px-1 lg:px-7">
                <div className="flex gap-2 px-5">
                    <a href="#" className="hover:text-amber-500">Beranda</a>
                    <p>/</p>
                    <a href="#" className="hover:text-amber-500">Desain</a>
                    <p>/</p>
                    <a href="#" className="hover:text-amber-500">Gapai Karir Impianmu .</a>
                </div>

                <div className="relative">
                    <div className="flex flex-col items-center">
                        <div className="px-5 pt-2 md:pt-20 lg:pt-5">
                            <img src="../assets/bg-hero.jpeg" alt="hero" className="h-[430px] md:h-[500px] lg:h-[400px] lg:w-[1300px] rounded-2xl brightness-20"/>
                        </div>
                        <div className="gap-5 md:gap-7 px-5 py-15 md:px-10 md:py-22 lg:py-30 lg:px-40 absolute top-[10%]">
                            <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold px-3 text-white">
                                Gapai Karir Impianmu sebagai Seorang UI/UX Designer & Product Manager.
                            </h1>
                            <p className="md:text-xl text-white px-3 py-4">
                                Belajar bersama tutor professional di Video Course. Kapanpun, di manapun.
                            </p>  
                            <p className="md:text-xl text-white px-3">
                                <span className="text-amber-500 pr-2">
                                &#9733; &#9733; &#9733; &#9733; &#9733; 
                                </span>
                                4.5 (67)
                            </p>     
                        </div>
                    </div>
                </div>

                <div className="lg:flex lg:flex-row-reverse lg:px-3">
                    <div className="w-full px-5 py-5 lg:w-1/3"> 
                        <div className="bg-white px-5 py-3 border rounded-xl border-gray-100">
                            <h1 className="font-bold">
                                Gapai Karir Impianmu sebagai Seorang UI/UX Designer & Product Manager.
                            </h1>
                            <div className="flex justify-between pt-1">
                                <div className="flex gap-2">
                                    <p className="font-bold text-green-500">
                                        Rp 250K 
                                    </p>
                                    <p className="font-bold text-gray-300 line-through">
                                        Rp 600K
                                    </p>
                                </div>
                                <p className="rounded-xl text-white px-3 bg-amber-500">
                                    Diskon 60%
                                </p>
                            </div>
                            <p className="text-gray-400 font-semibold py-2">
                                Penawaran spesial tersisa 2 hari lagi!
                            </p>
                            <div className="py-2">
                                <Button variant="bg-green-600 hover:bg-green-400 text-white py-0.5 font-semibold w-full rounded-xl">
                                    Beli Sekarang
                                </Button>
                            </div>
                            <p className="font-semibold py-2">
                                Kelas ini sudah termasuk
                            </p>
                            <div className="flex justify-between">               
                                <div className="flex flex-col gap-2">
                                    <p className="flex gap-3 items-center">
                                        <GrDocumentVerified />
                                        Ujian Akhir
                                    </p>
                                    <p className="flex gap-3 items-center">
                                        <HiOutlineClipboardDocumentList />
                                        7 Dokumen
                                    </p>
                                    <p className="flex gap-3 items-center">
                                        <MdEditDocument/>
                                        Pretest
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                        <p className="flex gap-3 items-center">
                                            <BsCameraVideo/>
                                            49 Video
                                        </p>
                                        <p className="flex gap-3 items-center">
                                            <GrDocumentUser/>
                                            Sertifikat
                                        </p>
                                </div>
                            </div>
                            <div className="pt-3">
                                <p className="font-bold pb-2">
                                    Bahasa Pengantar
                                </p>
                                <p className="flex gap-3 items-center">
                                    <SlGlobe />
                                    Bahasa Indonesia
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="px-5 py-5 lg:w-2/3">
                        <div className="bg-white px-5 py-5 border border-gray-200 rounded-xl">    
                            <h1 className="font-bold pb-4">
                                Deskripsi
                            </h1>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam culpa magni, officia accusantium eligendi voluptatem ducimus qui sapiente! Provident, consequuntur aliquid porro minus dolore ratione ipsam laborum cumque ad impedit ducimus voluptatem libero expedita voluptates id aut necessitatibus inventore ex at est facilis odio tempora architecto. Exercitationem, officiis nisi?
                            </p>
                        </div>
                    </div>
                </div>

                <div className="px-5 py-5 lg:w-2/3">
                    <div className="bg-white px-5 py-5 border border-gray-200 rounded-xl flex flex-col gap-3">
                        <h1 className="font-bold">
                            Belajar bersama tutor Profesional
                        </h1>
                        <div className="lg:flex lg:gap-4">    
                            <div className="border border-gray-200 rounded-xl px-3 py-3">
                                    <div className="flex justify-between">
                                        <p>
                                            profile
                                        </p>
                                        <div>
                                            <p className="font-semibold">
                                                Muhammad Ulil Albab
                                            </p>
                                            <p>
                                                Suami Prima
                                            </p>
                                        </div>
                                    </div>
                                    <p className="pt-3">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quos enim tempora odio ullam quaerat culpa nisi amet neque. Ratione?
                                    </p>
                            </div>
                            <div className="border border-gray-200 rounded-xl px-3 py-3">
                                    <div className="flex justify-between">
                                        <p>
                                            profile
                                        </p>
                                        <div>
                                            <p className="font-semibold">
                                                Prima Ananda Choirunnisa
                                            </p>
                                            <p>
                                                Istri Ulil
                                            </p>
                                        </div>
                                    </div>
                                    <p className="pt-3">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quos enim tempora odio ullam quaerat culpa nisi amet neque. Ratione?
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailProducts