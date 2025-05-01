import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";

const banksOptions = [
  { id: 1, name: "Bank BCA", logo: "../assets/bca.png" },
  { id: 2, name: "Bank BNI", logo: "../assets/bni.png" },
  { id: 3, name: "Bank BRI", logo: "../assets/bri.png" },
  { id: 4, name: "Bank Mandiri", logo: "../assets/mandiri.png" },
];

const eWalletOptions = [
  { id: 1, name: "Dana", logo: "../assets/dana.png" },
  { id: 2, name: "OVO", logo: "../assets/ovo.png" },
  { id: 4, name: "LinkAja", logo: "../assets/link-aja.png" },
  { id: 3, name: "ShopeePay", logo: "../assets/shopee.png" },
];

const creditCardOptions = [
  { id: 1, name: "Mastercard", logo: "../assets/mastercard.png" },
  { id: 2, name: "Visa", logo: "../assets/visa.png" },
  { id: 3, name: "jcb", logo: "../assets/jcb.png" },
];

const PaymentMethod = () => {
  const [selectedBank, setSelectedBank] = useState(null);
  const [selectedEWallet, setSelectedEWallet] = useState(null);
  const [selectedCreditCard, setSelectedCreditCard] = useState(null);
  const [isOpenBank, setIsOpenBank] = useState(false);
  const [isOpenEWallet, setIsOpenEWallet] = useState(false);
  const [isOpenCreditCard, setIsOpenCreditCard] = useState(false);

  const toggleDropdownBank = () => {
    setIsOpenBank(!isOpenBank);
  };

  const toggleDropdownEWallet = () => {
    setIsOpenEWallet(!isOpenEWallet);
  };

  const toggleDropdownCreditCard = () => {
    setIsOpenCreditCard(!isOpenCreditCard);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <button onClick={toggleDropdownBank} className="flex justify-between w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-lg font-medium hover:bg-gray-50 ">
        Transfer bank
        {isOpenBank ? <FaChevronUp className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" /> : <FaChevronDown className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" />}
      </button>

      {isOpenBank && (
        <div className="rounded-md shadow-lg bg-white">
          <div className="py-1">
            {banksOptions.map((bank) => (
              <button key={bank.id} onClick={() => setSelectedBank(bank)} className=" px-4 py-2 text-sm md:text-lg text-gray-700 hover:bg-gray-100 w-full text-left flex items-center justify-between">
                <div>
                  <img src={bank.logo} alt={bank.name} className="w-8 h-8 inline-block mr-2" />
                  {bank.name}
                </div>
                {selectedBank && selectedBank.id === bank.id && <SiTicktick className="ml-2 -mr-1 h-5 w-5 text-amber-500" aria-hidden="true" />}
              </button>
            ))}
          </div>
        </div>
      )}

      <button onClick={toggleDropdownEWallet} className="flex justify-between w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-lg font-medium hover:bg-gray-50 ">
        E-Wallet
        {isOpenEWallet ? <FaChevronUp className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" /> : <FaChevronDown className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" />}
      </button>

      {isOpenEWallet && (
        <div className="rounded-md shadow-lg bg-white">
          <div className="py-1">
            {eWalletOptions.map((eWallet) => (
              <button key={eWallet.id} onClick={() => setSelectedEWallet(eWallet)} className=" px-4 py-2 text-sm md:text-lg text-gray-700 hover:bg-gray-100 w-full text-left flex items-center justify-between">
                <div>
                  <img src={eWallet.logo} alt={eWallet.name} className="w-8 h-8 inline-block mr-2" />
                  {eWallet.name}
                </div>
                {selectedEWallet && selectedEWallet.id === eWallet.id && <SiTicktick className="ml-2 -mr-1 h-5 w-5 text-amber-500" aria-hidden="true" />}
              </button>
            ))}
          </div>
        </div>
      )}

      <button onClick={toggleDropdownCreditCard} className="flex justify-between w-full border border-gray-300 rounded-lg px-4 py-2 text-sm md:text-lg font-medium hover:bg-gray-50 ">
        Kartu Kredit/Debit
        {isOpenCreditCard ? <FaChevronUp className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" /> : <FaChevronDown className="ml-2 -mr-1 h-5 w-5 text-gray-500" aria-hidden="true" />}
      </button>

      {isOpenCreditCard && (
        <div className="rounded-md shadow-lg">
          <div className="py-1">
            {creditCardOptions.map((credit) => (
              <button key={credit.id} onClick={() => setSelectedCreditCard(credit)} className=" px-4 py-2 text-sm md:text-lg text-gray-700 hover:bg-gray-100 w-full flex items-center justify-between">
                <div>
                  <img src={credit.logo} alt={credit.name} className="w-8 h-8 inline-block mr-2" />
                </div>
                {selectedCreditCard && selectedCreditCard.id === credit.id && <SiTicktick className="ml-2 -mr-1 h-5 w-5 text-amber-500" aria-hidden="true" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
