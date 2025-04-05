import DropdownFooter from "./Dropdown"
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="w-full px-5 py-5">
            <div>
                <div>    
                    <h1 className="text-2xl text-amber-500 font-semibold pb-3">videobelajar</h1>
                    <p className="font-bold pb-1">Gali Potensi Anda melalui Pembelajaran Video di hariesok.id</p>
                    <p className="pb-1">Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
                    <p className="pb-1">+853-3461-7470</p>
                </div>
                <DropdownFooter 
                    title="Kategori"
                    item={[
                        'Pendidikan',
                        'Teknologi',
                        'Kesehatan',
                        'Kesejahteraan',
                    ]}
                    />
                <DropdownFooter title="Perusahaan"/>
                <DropdownFooter title="Komunitas"/>
            </div>
            <hr />
            <div className="flex flex-col lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
                <div className="flex gap-3 mt-3">
                    <FaInstagram className="h-8 w-8 hover:cursor-pointer hover:text-amber-200"/>
                    <FaLinkedin className="h-8 w-8 hover:cursor-pointer hover:text-amber-200"/> 
                    <FaTwitter className="h-8 w-8 hover:cursor-pointer hover:text-amber-200"/>
                    <FaFacebook className="h-8 w-8 hover:cursor-pointer hover:text-amber-200"/>
                </div>
                <div className="pt-2">
                    <p className="pr-20">
                        @2023 hariesok.id All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer