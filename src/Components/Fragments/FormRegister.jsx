import { useState } from "react";
import Button from "../Elements/Button/Button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Password dan konfirmasi password tidak sama", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (!email || !password || !confirmPassword) {
      return toast.error("Semua form harus diisi", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (password.length < 6) {
      return toast.error("Password minimal 6 karakter", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    const userData = { name, email, password };
    localStorage.setItem("userData", JSON.stringify(userData));
    toast.success("Akun berhasil dibuat", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    navigate("/login");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleRegister}>
      <label htmlFor="name">Nama Lengkap</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="" className="text-sm mt-2 mb-5 border rounded-md w-full py-2 px-3 placeholder: opacity-50 " />
      <label htmlFor="email">E-Mail</label>
      <input type="email" name="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} className="text-sm mt-2 mb-5 border rounded-md w-full py-2 px-3 placeholder: opacity-50 " />
      <label htmlFor="password">Kata Sandi</label>
      <input type="password" name="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} className="text-sm mt-2 mb-5 border rounded-md w-full py-2 px-3 placeholder: opacity-50 " />
      <label htmlFor="confirmPassword">Konfirmasi Kata Sandi</label>
      <input type="Password" name="confirmPassword" placeholder="" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="text-sm mt-2 mb-5 border rounded-md w-full py-2 px-3 placeholder: opacity-50 " />
      <div className="flex justify-end pb-5 hover:underline cursor-pointer">
        <p>Lupa Password?</p>
      </div>

      <Button variant="bg-green-600 w-full rounded-md text-white font-bold px-10 py-3 hover:bg-amber-500 cursor-pointer" type="submit" onClick={handleRegister}>
        Daftar
      </Button>

      <Button variant="bg-emerald-100 text-green-600 rounded-md font-bold w-full my-5 px-10 py-3 hover:bg-amber-500 cursor-pointer">Masuk</Button>

      <p className="text-center pb-5">Atau</p>

      <Button variant="bg-transparent text-sm flex gap-3 items-center justify-center rounded-md border border-gray-600 font-semibold w-full px-10 py-3 cursor-pointer">
        <img src="../assets/google.png" alt="" />
        Daftar dengan Google
      </Button>
    </form>
  );
};

export default FormRegister;
