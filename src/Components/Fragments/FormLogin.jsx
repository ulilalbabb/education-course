import { useState } from "react";
import Button from "../Elements/Button/Button";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storeUser = JSON.parse(localStorage.getItem("userData"));
    if (storeUser) {
      if (storeUser.email === email && storeUser.password === password) {
        localStorage.setItem("isLogin", true);
        toast.success("Login berhasil", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/homepage");
      } else {
        toast.error("Password atau email salah", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Daftar terlebih dahulu", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="email">E-Mail</label>
      <input type="text" name="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} className="text-sm mt-2 mb-5 border rounded-md w-full py-2 px-3 placeholder: opacity-50 " />
      <label htmlFor="password">Kata Sandi</label>
      <input type="password" name="password" placeholder="" value={password} onChange={(e) => setPassword(e.target.value)} className="text-sm mt-2 mb-5 border rounded-md w-full py-2 px-3 placeholder: opacity-50 " />
      <div className="flex justify-end pb-5 hover:underline cursor-pointer">
        <p>Lupa Password?</p>
      </div>

      <Button variant="bg-green-600 rounded-md w-full text-white font-bold px-10 py-3 hover:bg-amber-500 cursor-pointer" type="submit" onClick={handleLogin}>
        Masuk
      </Button>

      <Button variant="bg-emerald-100 rounded-md text-green-600 font-bold w-full my-5 px-10 py-3 hover:bg-amber-500 cursor-pointer">
        <Link to={"/register"}>Daftar</Link>
      </Button>

      <p className="text-center pb-5">Atau</p>

      <Button variant="bg-transparent flex gap-3 text-sm rounded-md items-center justify-center  border border-gray-600 font-semibold w-full px-10 py-3 cursor-pointer">
        <img src="../assets/google.png" alt="" />
        Masuk dengan Google
      </Button>
    </form>
  );
};

export default FormLogin;
