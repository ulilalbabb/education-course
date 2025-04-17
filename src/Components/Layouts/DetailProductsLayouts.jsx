import Button from "../Elements/Button/Button";
import FinalCardProject from "../Fragments/FinalCardProject";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GrDocumentVerified, GrDocumentUser } from "react-icons/gr";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdEditDocument } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { SlGlobe } from "react-icons/sl";
import Card from "../Fragments/Card";

const DropdownLearning = ({title, options}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return(
    <div className=" text-left">
      <div className=''>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full cursor-pointer shadow-sm px-4 py-2 text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {selectedOption || title}
          {
            isOpen ? (
              <FaChevronUp className="ml-2 -mr-1 h-5 w-5 text-green-500" aria-hidden="true" />
            ) : (
              <FaChevronDown className="ml-2 -mr-1 h-5 w-5 text-green-500" aria-hidden="true" />
            )
          }
        </button>
      </div>

      {isOpen && (
        <div className="w-full rounded-md bg-white shadow-lg">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left border-b border-gray-200"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const DetailProductsLayouts = () => {
  const learningOption1 = ['a1', 'bb']
  const learningOption2 = ['a2', 'bb']
  const learningOption3 = ['a3', 'bb']
  const learningOption4 = ['a4', 'bb']

  return (
    <>
      <div className="bg-primary px-1 lg:px-7">
        <div className="flex gap-2 px-5">
          <a href="#" className="hover:text-amber-500">
            Beranda
          </a>
          <p>/</p>
          <a href="#" className="hover:text-amber-500">
            Desain
          </a>
          <p>/</p>
          <a href="#" className="hover:text-amber-500">
            Gapai Karir Impianmu .
          </a>
        </div>

        {/* Hero */}
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="px-5 pt-2 md:pt-20 lg:pt-5">
              <img src="../assets/bg-hero.jpeg" alt="hero" className="h-[430px] md:h-[500px] lg:h-[400px] lg:w-[1320px] rounded-2xl brightness-20" />
            </div>
            <div className="gap-5 md:gap-7 px-5 py-15 md:px-10 md:py-22 lg:py-25 lg:px-40 absolute top-[10%]">
              <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold px-3 text-white">Gapai Karir Impianmu sebagai Seorang UI/UX Designer & Product Manager.</h1>
              <p className="md:text-xl text-white px-3 py-4">Belajar bersama tutor professional di Video Course. Kapanpun, di manapun.</p>
              <p className="md:text-xl text-white px-3">
                <span className="text-amber-500 pr-2">&#9733; &#9733; &#9733; &#9733; &#9733;</span>
                4.5 (67)
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:w-full">
            <div className="px-5 py-5 ">
              <div className="bg-white px-5 py-5 border border-gray-200 rounded-xl">
                <h1 className="font-bold pb-4">Deskripsi</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam culpa magni, officia accusantium eligendi voluptatem ducimus qui sapiente! Provident, consequuntur aliquid porro minus dolore ratione ipsam
                  laborum cumque ad impedit ducimus voluptatem libero expedita voluptates id aut necessitatibus inventore ex at est facilis odio tempora architecto. Exercitationem, officiis nisi?
                </p>
              </div>
            </div>
            <FinalCardProject title="Belajar bersama tutor professional"/>
          </div>

          <div className="w-full px-5 py-5 lg:w-1/2">
            <div className="bg-white px-5 py-3 border rounded-xl border-gray-100">
              <h1 className="font-bold">Gapai Karir Impianmu sebagai Seorang UI/UX Designer & Product Manager.</h1>
              <div className="flex justify-between pt-1">
                <div className="flex gap-2">
                  <p className="font-bold text-green-500">Rp 250K</p>
                  <p className="font-bold text-gray-300 line-through">Rp 600K</p>
                </div>
                <p className="rounded-xl text-white px-3 bg-amber-500">Diskon 60%</p>
              </div>
              <p className="text-gray-400 font-semibold py-2">Penawaran spesial tersisa 2 hari lagi!</p>
              <div className="py-2">
                <Button variant="bg-green-600 hover:bg-green-400 cursor-pointer text-white py-0.5 font-semibold w-full rounded-xl">Beli Sekarang</Button>
              </div>
              <p className="font-semibold py-2">Kelas ini sudah termasuk</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="flex gap-3 items-center">
                    <GrDocumentVerified />
                    Ujian Akhir
                  </p>
                  <p className="flex gap-3 items-center">
                    <HiOutlineClipboardDocumentList />7 Dokumen
                  </p>
                  <p className="flex gap-3 items-center">
                    <MdEditDocument />
                    Pretest
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex gap-3 items-center">
                    <BsCameraVideo />
                    49 Video
                  </p>
                  <p className="flex gap-3 items-center">
                    <GrDocumentUser />
                    Sertifikat
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <p className="font-bold pb-2">Bahasa Pengantar</p>
                <p className="flex gap-3 items-center">
                  <SlGlobe />
                  Bahasa Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 py-5 lg:w-2/3">
          <div className="bg-white px-5 py-5 border border-gray-200 rounded-xl flex flex-col gap-3">
            <h1 className="font-bold">Kamu akan mempelajari</h1>
            <DropdownLearning title="Introduction to Course 1: Foundations of User Experience Design" options={learningOption1}/>
            <DropdownLearning title="Universal Design, inclusive design, and equity-focused design" options={learningOption2}/>
            <DropdownLearning title="Introduction to design sprints" options={learningOption3}/>
            <DropdownLearning title="Introduction to UX research" options={learningOption4}/>
          </div>
        </div>

        <div className="lg:w-2/3">
          <FinalCardProject title="Rating dan Review"/>
        </div>

        <div className="px-5 py-3">
            <h1 className="font-bold text-2xl">
              Video Pembelajaran Terkait Lainnya
            </h1>
            <p>
              Ekpansi Pengetahuan Anda Dengan Rekomendasi Spesial Kami!
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 py-2 px-5 lg:pb-10 lg:gap-2">
            <Card></Card>
        </div>
      </div>
    </>
  );
};

export default DetailProductsLayouts;