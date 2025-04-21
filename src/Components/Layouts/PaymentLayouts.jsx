import PaymentMethod from "../Fragments/PaymentMethod";
import CardBuy from "../Fragments/CardBuy";
import Button from "../Elements/Button/Button";

const PaymentLayouts = () => {
  return (
    <div className="bg-primary flex flex-col-reverse gap-5 lg:flex-row">
      <div className="lg:pl-10 lg:pt-5 px-5 w-full">
        <div className="py-5 px-5 border bg-white border-gray-200 rounded-2xl">
          <h1 className="font-bold text-2xl pb-3">Metode Pembayaran</h1>
          <PaymentMethod />
        </div>
        <div className="py-5">
          <div className="py-5 px-5 border bg-white border-gray-200 rounded-2xl">
            <h1 className="font-bold text-2xl pb-3">Ringkasan Pembayaran</h1>
            <div className="text-sm py-2 flex">
              <p className="pr-20">Video Learning Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager</p>
              <p className="font-bold">Rp 499.000</p>
            </div>
            <div className="text-sm py-5 flex justify-between">
              <p>Admin</p>
              <p className="font-bold">Rp 20.000</p>
            </div>
            <hr />
            <div className="text-sm py-3 flex items-center justify-between">
              <p className="font-bold">Total Pembayaran</p>
              <p className="font-bold text-lg text-green-500">Rp 519.000</p>
            </div>
            <Button variant="bg-green-600 hover:bg-green-400 cursor-pointer text-white py-1 font-semibold w-full rounded-xl">
              <p>Beli Sekarang</p>
            </Button>
          </div>
        </div>
      </div>
      <CardBuy></CardBuy>
    </div>
  );
};

export default PaymentLayouts;
