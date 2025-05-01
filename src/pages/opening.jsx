import Button from "../Components/Elements/Button/Button";
import { Link } from "react-router-dom";

const Opening = () => {
  return (
    <div className="bg-opening pt-15 px-5 lg:h-screen lg:flex lg:items-center lg:justify-center">
      <div className="font-primary flex flex-col gap-5 lg:w-1/2">
        <p className="lg:text-3xl md:text-2xl">VIDEO LEARNING PLATFORM</p>
        <h1 className="font-extrabold text-4xl ">VideoBelajar</h1>
        <p className="lg:text-2xl md:text-2xl">
          VideoBelajar adalah platform pembelajaran video berbasis web yang memberi pengguna akses ke beragam kursus dan tutorial berbasis video. Dengan VideoBelajar, pengguna dapat belajar dengan kecepatan dan jadwal mereka sendiri.
          VideoBelajar menawarkan cara yang fleksibel dan nyaman untuk memperoleh keterampilan dan pengetahuan baru, sehingga memudahkan pengguna menyesuaikan pembelajaran ke dalam kehidupan mereka yang sibuk. VideoBelajar menawarkan
          berbagai kursus dan tutorial, mencakup topik seperti bisnis, teknologi, kesehatan dan kesejahteraan, pembelajaran bahasa, dan banyak lagi.
        </p>
        <div>
          <Button variant="bg-amber-600 rounded-3xl px-10 py-3 hover:bg-amber-500 cursor-pointer md:text-xl">
            <Link to={"/login"}>Mulai Belajar</Link>
          </Button>
        </div>
      </div>
      <div className="pt-20 md:pl-30 lg:pt-20">
        <img src="../assets/iPhone.png" alt="iPhone" className="lg:w-[560px] lg:h-[670px] md:w-[560px] md:h-[670px]" />
      </div>
    </div>
  );
};

export default Opening;
