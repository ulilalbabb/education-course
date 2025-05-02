import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="bg-primary">
      <div className="flex flex-col items-center ">
        <div className="px-5 pt-10 md:pt-20 ">
          <img src="../assets/bg-hero.jpeg" alt="hero" className="h-[430px] md:h-[500px] lg:h-[400px] lg:w-[1350px] rounded-2xl brightness-20" />
        </div>
        <div className="flex flex-col items-center gap-5 md:gap-7 px-5 py-15 md:px-10 md:py-22 lg:py-30 lg:px-40 absolute top-[10%]">
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-bold text-center px-3 text-white">Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaksi</h1>
          <p className="text-center md:text-xl text-white px-3">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
          </p>
          <div className="px-5">
            <Button variant="bg-green-500 text-sm rounded-md text-white px-3 py-2 md:px-10 md:py-3 md:text-xl hover:bg-green-600 cursor-pointer">Temukan Video Course untuk Dipelajari</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
