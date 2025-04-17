import { Link } from "react-router"
import Card from "../Fragments/Card"

const CardLayouts = () => {
return (
    <div className="bg-primary px-5 py-5 md:px-10 md:py-5 lg:w-full lg:px-10">
        <h1 className="font-bold text-2xl pt-2">
            Koleksi Video <br />Pembelajaran Unggulan
        </h1>
        <p>
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
        <div className="pt-2">
            <ul className="flex gap-3">
                <li className="hover:underline hover:text-amber-500 font-semibold cursor-pointer">Semua Kelas</li>
                <li className="hover:underline hover:text-amber-500 font-semibold cursor-pointer">Pemasaran</li>
                <li className="hover:underline hover:text-amber-500 font-semibold cursor-pointer">Desain</li>
            </ul>
        </div>
        <Link to={"/detailproducts"}>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 pt-5 lg:gap-2">
                <Card></Card>
            </div>
        </Link>
    </div>
)
}

export default CardLayouts