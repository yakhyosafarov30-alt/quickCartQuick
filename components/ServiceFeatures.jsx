import { Truck, Headphones, ShieldCheck } from "lucide-react";

export default function ServiceFeatures() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {/* Feature 1 */}
        <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
          <div className="relative w-16 h-16 flex items-center justify-center mb-3">
            <div className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-300 group-hover:bg-gray-300"></div>
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center relative transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-110">
              <Truck className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
          <h3 className="text-base font-bold tracking-wide transition-colors duration-300 group-hover:text-black">
            FREE AND FAST DELIVERY
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Feature 2 */}
        <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
          <div className="relative w-16 h-16 flex items-center justify-center mb-3">
            <div className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-300 group-hover:bg-gray-300"></div>
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center relative transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-110">
              <Headphones className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
          <h3 className="text-base font-bold tracking-wide transition-colors duration-300 group-hover:text-black">
            24/7 CUSTOMER SERVICE
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Feature 3 */}
        <div className="group flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
          <div className="relative w-16 h-16 flex items-center justify-center mb-3">
            <div className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-300 group-hover:bg-gray-300"></div>
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center relative transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-110">
              <ShieldCheck className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
            </div>
          </div>
          <h3 className="text-base font-bold tracking-wide transition-colors duration-300 group-hover:text-black">
            MONEY BACK GUARANTEE
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            We return money within 30 days
          </p>
        </div>
      </div>
    </section>
  );
}
