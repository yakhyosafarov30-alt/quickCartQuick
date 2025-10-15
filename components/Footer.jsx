import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
        {/* Exclusive */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Exclusive</h3>
          <p className="text-sm mb-2">Subscribe</p>
          <p className="text-sm text-gray-400 mb-4">
            Get 10% off your first order
          </p>
          <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-sm text-gray-300 px-3 py-2 outline-none w-full"
            />
            <button className="bg-transparent px-3 text-gray-300 hover:text-white transition">
              <Send size={18} />
            </button>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <p className="text-sm text-gray-400">
            111 Bijoy sarani, Dhaka,<br /> DH 1515, Bangladesh.
          </p>
          <p className="text-sm text-gray-400 mt-3">exclusive@gmail.com</p>
          <p className="text-sm text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Account</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">My Account</li>
            <li className="hover:text-white cursor-pointer">Login / Register</li>
            <li className="hover:text-white cursor-pointer">Cart</li>
            <li className="hover:text-white cursor-pointer">Wishlist</li>
            <li className="hover:text-white cursor-pointer">Shop</li>
          </ul>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms Of Use</li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Download App */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Download App</h3>
          <p className="text-sm text-gray-400 mb-3">
            Save $3 with App New User Only
          </p>
          {/* <div className="flex gap-2 mb-3">
            <Image
              src="/assets/qrcode.png"
              alt="QR Code"
              width={80}
              height={80}
              className="rounded-sm"
            />
            <div className="flex flex-col gap-2">
              <Image
                src="/assets/googleplay.png"
                alt="Google Play"
                width={120}
                height={40}
              />
              <Image
                src="/assets/appstore.png"
                alt="App Store"
                width={120}
                height={40}
              />
            </div>
          </div> */}

          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-gray-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
}
