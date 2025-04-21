import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Card from "./Card";

const Dropdown = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className=" text-left">
      <div className="">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full cursor-pointer` rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {selectedOption || title}
          {isOpen ? <FaChevronUp className="ml-2 -mr-1 h-5 w-5 text-green-500" aria-hidden="true" /> : <FaChevronDown className="ml-2 -mr-1 h-5 w-5 text-green-500" aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option) => (
              <button key={option} onClick={() => handleOptionClick(option)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left border-b border-gray-200">
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Category = () => {
  const options1 = ["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"];
  const options2 = ["Pemasaran", "Digital & Teknologi", "Pengembangan Diri", "Bisnis Manajemen"];
  const options3 = ["Kurang dari 4 Jam", "4 - 8 Jam", "Lebih dari 8 Jam"];

  return (
    <div className="bg-primary lg:px-5">
      <h1 className="font-bold text-2xl pl-5 pt-5">Koleksi Video Pembelajaran Unggulan</h1>
      <p className="text-gray-600 pl-5">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      <div className="p-5">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* sidebar */}
          <div className="lg:w-1/4 lg:h-full flex flex-col bg-white space-y-4 border rounded-md border-gray-200 p-5">
            <div className="flex justify-between">
              <p className="font-bold">Filter</p>
              <p className="text-red-500 font-bold">Reset</p>
            </div>
            <Dropdown title="Bidang Studi" options={options1} />
            <Dropdown title="Harga" options={options2} />
            <Dropdown title="Durasi" options={options3} />
          </div>

          {/* content */}
          <div className="mt-5 lg:mt-0 lg:gap-10 lg:w-2/3">
            <div className="flex justify-between lg:justify-end lg:gap-20 lg:pr-5 pb-5">
              <Dropdown title="Urutkan" options={options3} />
              <search>
                <form>
                  <input name="search" id="search" placeholder="Cari Kelas" className="border border-gray-300 rounded-md px-3 py-2 w-40 font-bold" />
                </form>
              </search>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
              <Card></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
