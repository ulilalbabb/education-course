import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DropdownFooter = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const { title, item } = props

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">{title}</h2>
                <button onClick={toggleDropdown} className="focus:outline-none cursor-pointer">
                    {isOpen ? <FaChevronUp /> : <FaChevronDown />} 
                </button>
            </div>
            <div
                className={`mt-4 transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
            >
                <ul className="">
                    <li><a href="#about" className="hover:underline">{item}</a></li>
                    {/* <li><a href="#services" className="hover:underline">{item}</a></li>
                    <li><a href="#contact" className="hover:underline">{item}</a></li>
                    <li><a href="#privacy" className="hover:underline">{item}</a></li>
                    <li><a href="#privacy" className="hover:underline">{item}</a></li> */}
                </ul>         
            </div>
        </div>
    );
};

export default DropdownFooter;