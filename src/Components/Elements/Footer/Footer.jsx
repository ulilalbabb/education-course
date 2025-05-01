import { useState } from "react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const [isOpenCommunity, setIsOpenCommunity] = useState(false);
  const [isOpenCategory, setIsOpenCategory] = useState(false);

  return (
    <footer className="bg-white p-5 md:px-10 lg:px-15 ">
      <div className="py-5 lg:flex lg:justify-between lg:pb-10">
        <div>
          <h1 className="text-lg md:text-2xl font-semibold text-orange-500 mb-2">videobelajar</h1>
          <p className="font-bold md:text-xl">Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
          <p className="text-gray-700 md:text-lg">JL. Usman Effendi No. 50 Lowokwaru, Malang</p>
          <p className="text-gray-700 md:text-lg">+62-877-7123-1234</p>
        </div>

        {/* Desktop Footer Links */}
        <div className="hidden md:flex justify-between mt-6 lg:gap-10">
          <div className="flex flex-col md:text-lg">
            <span className="font-semibold">Kategori</span>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Digital & Teknologi
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Pemasaran
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Manajemen Bisnis
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Pengembangan Diri
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Desain
            </a>
          </div>
          <div className="flex flex-col md:text-lg">
            <span className="font-semibold">Perusahaan</span>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Tentang Kami
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              FAQ
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Ketentuan Layanan
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Bantuan
            </a>
          </div>
          <div className="flex flex-col md:text-lg">
            <span className="font-semibold">Komunitas</span>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Tips Sukses
            </a>
            <a href="#" className="text-gray-600 hover:underline pt-1">
              Blog
            </a>
          </div>
        </div>

        {/* Mobile Footer Links */}
        <div className="md:hidden">
          <div className="flex flex-col">
            <button className="text-left w-full py-2 font-bold" onClick={() => setIsOpenCompany(!isOpenCompany)}>
              Kategori
            </button>
            {isOpenCompany && (
              <div className="flex flex-col">
                <a href="#" className="text-gray-600">
                  Digital & Teknologi
                </a>
                <a href="#" className="text-gray-600">
                  Pemasaran
                </a>
                <a href="#" className="text-gray-600">
                  Manajemen Bisnis
                </a>
                <a href="#" className="text-gray-600">
                  Pengembangan Diri
                </a>
                <a href="#" className="text-gray-600">
                  Desain
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <button className="text-left w-full py-2 font-bold" onClick={() => setIsOpenCategory(!isOpenCategory)}>
              Perusahaan
            </button>
            {isOpenCategory && (
              <div className="flex flex-col">
                <a href="#" className="text-gray-600">
                  Tentang Kami
                </a>
                <a href="#" className="text-gray-600">
                  FAQ
                </a>
                <a href="#" className="text-gray-600">
                  Kebijakan Privasi
                </a>
                <a href="#" className="text-gray-600">
                  Ketentuan Layanan
                </a>
                <a href="#" className="text-gray-600">
                  Bantuan
                </a>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <button className="text-left w-full py-2 cursor-pointer font-bold" onClick={() => setIsOpenCommunity(!isOpenCommunity)}>
              Komunitas
            </button>
            {isOpenCommunity && (
              <div className="flex flex-col ">
                <a href="#" className="text-gray-600">
                  Tips Sukses
                </a>
                <a href="#" className="text-gray-600">
                  Blog
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr />
      <div className="lg:flex lg:items-center lg:justify-between lg:flex-row-reverse md:flex md:items-center md:justify-between md:flex-row-reverse lg:pt-2">
        <div className="flex gap-3 mt-4">
          <FaInstagram className="h-8 w-8 cursor-pointer" />
          <FaLinkedin className="h-8 w-8 cursor-pointer" />
          <FaFacebook className="h-8 w-8 cursor-pointer" />
          <FaTwitter className="h-8 w-8 cursor-pointer" />
        </div>
        <div className="mt-3 text-gray-500 text-sm md:text-lg">©2023 Gerobak Sayur All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
