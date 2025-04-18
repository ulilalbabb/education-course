import Button from "../Elements/Button/Button";
import { GrDocumentVerified, GrDocumentUser } from "react-icons/gr";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdEditDocument } from "react-icons/md";
import { BsCameraVideo } from "react-icons/bs";
import { SlGlobe } from "react-icons/sl";

const CardBuy = () => {
    return (
        <div className="w-full px-5 pt-5 lg:w-1/2">
            <div className="bg-white px-5 py-3 border rounded-xl border-gray-100">
              <h1 className="font-bold">Gapai Karir Impianmu sebagai Seorang UI/UX Designer & Product Manager.</h1>
              <div className="flex justify-between pt-1">
                <div className="flex gap-2">
                  <p className="font-bold text-green-500">Rp 250K</p>
                  <p className="font-bold text-gray-300 line-through">Rp 600K</p>
                </div>
                <p className="rounded-xl text-white px-3 bg-amber-500">Diskon 60%</p>
              </div>
              <p className="text-gray-400 font-semibold py-2">Penawaran spesial tersisa 2 hari lagi!</p>
              <div className="py-2">
                <Button variant="bg-green-600 hover:bg-green-400 cursor-pointer text-white py-0.5 font-semibold w-full rounded-xl">Beli Sekarang</Button>
              </div>
              <p className="font-semibold py-2">Kelas ini sudah termasuk</p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <p className="flex gap-3 items-center">
                    <GrDocumentVerified />
                    Ujian Akhir
                  </p>
                  <p className="flex gap-3 items-center">
                    <HiOutlineClipboardDocumentList />7 Dokumen
                  </p>
                  <p className="flex gap-3 items-center">
                    <MdEditDocument />
                    Pretest
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="flex gap-3 items-center">
                    <BsCameraVideo />
                    49 Video
                  </p>
                  <p className="flex gap-3 items-center">
                    <GrDocumentUser />
                    Sertifikat
                  </p>
                </div>
              </div>
              <div className="pt-3">
                <p className="font-bold pb-2">Bahasa Pengantar</p>
                <p className="flex gap-3 items-center">
                  <SlGlobe />
                  Bahasa Indonesia
                </p>
              </div>
            </div>
          </div>
    )
}

export default CardBuy