const Cta = () => {
    return (
        <div className="bg-primary relative flex flex-col items-center w-full px-5 py-15 md:px-10 md:py-22 lg:py-30 lg:px-20">
            <img src="../assets/banner.jpeg" alt="banner" className="h-[430px] md:h-[500px] lg:h-[400px] lg:w-[1200px] rounded-md brightness-20"/>
            <div className="flex flex-col items-center gap-3 md:gap-5 lg:gap-2 absolute top-[20%] text-white px-8 lg:px-40 lg:py-10">    
                <h1 className="text-xl md:text-2xl lg:text-xl ">
                    NEWSLETTER
                </h1>
                <h2 className="text-2xl px-4 md:text-4xl lg:text-3xl font-bold text-center">
                    Mau Belajar Lebih Banyak?
                </h2>
                <p className="text-center md:text-xl px-8">
                    Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesok.id
                </p>
            </div>
            <div className="flex flex-col items-center gap-4 md:gap-7 absolute top-[55%] lg:top-[45%] pt-12 lg:pt-15 w-3/4 md:w-1/2 lg:w-1/2">
                <input type="email" placeholder="Masukkan Emailmu" className="mt-1 block w-full p-2 md:px-10 md:py-3 lg:py-4 bg-white md:text-xl text-center lg:text-left border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" />
                <button className="bg-amber-500 w-full lg:w-1/4 lg:absolute bottom-1 right-1 text-sm rounded-md text-white px-3 py-3 md:px-10 md:py-3 md:text-xl hover:bg-green-600 cursor-pointer">
                    Subscribe
                </button>
            </div>
        </div>
    )
}

export default Cta