import Image from "next/image";
import headphone from "../../../../public/headphone.png";
import weight from "../../../../public/weight.png";
import heart from "../../../../public/heart.png";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        <div>
          <Image
            className="mx-auto duration-200 w-60 hover:scale-105"
            src={headphone}
            alt="headphone"
          />
        </div>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
            <div>
              <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">
                Free Shipping
              </div>
            </div>
            <div className="max-w-sm text-2xl font-medium">
              Razer Kraken Kitty Edt Gaming Headset Quartz
            </div>
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <p className="line-through">$799</p>
              <p className="text-5xl font-bold">$599</p>
              <p className="text-sm font-light text-gray-400">
                This offer is valid until April 3rd or as long as stock lasts!
              </p>
            </div>
            <div className="bg-blue-700 group h-14 w-full rounded-lg">
              <button className="bg-blue-500 text-white py-3 w-full rounded-lg group-hover:translate-y-2 hover:bg-blue-700 duration-200">
                Buy now
              </button>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-pulse"></div>
              <div className="text-sm">50+ pcs. in stock</div>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <Image className="w-8" src={weight} alt="" />
                <span>Add to cart</span>
              </button>
              <button className="flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150">
                <Image className="w-8" src={heart} alt="" />
                <span>Add to wishlist</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
