import FormLogin from "../Fragments/FormLogin";
import FormRegister from "../Fragments/FormRegister";
import Navbar from "../Elements/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

const AuthLayouts = (props) => {
  const { title, type } = props;
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-primary h-screen flex flex-col items-center pt-5 pb-5">
        <div className="border bg-white w-[90%] md:w-[60%] lg:w-[35%] rounded-md border-none p-6 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30">
          <h1 className="text-center font-bold text-2xl pb-2">{title}</h1>
          <p className="text-center pb-5">{type === "login" ? "Yuk, lanjutin belajarmu di videobelajar" : "Yuk, daftarkan akunmu sekarang juga!"}</p>
          {type === "login" ? <FormLogin></FormLogin> : <FormRegister></FormRegister>}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AuthLayouts;
