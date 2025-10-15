"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import { Search, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { products, router, isSeller } = useAppContext();

  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // 🔍 Search bo‘yicha filter
  useEffect(() => {
    if (query.trim() === "") {
      setFiltered([]);
      return;
    }
    const results = products.filter((p) =>
      p.name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(results);
  }, [query, products]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        {/* 🔹 Logo */}
        <h1
          onClick={() => router.push("/")}
          className="text-2xl font-bold text-gray-900 cursor-pointer select-none"
        >
          Exclusive
        </h1>

        {/* 🔹 Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "/", label: "Home" },
            { href: "/all-products", label: "All Products" },
            { href: "/about", label: "About" },
            { href: "/aign-up", label: "Sign Up" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-gray-700 hover:text-black transition group"
            >
              {link.label}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {isSeller && (
            <button
              onClick={() => router.push("/seller")}
              className="text-xs border px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition duration-300"
            >
              Seller Dashboard
            </button>
          )}
        </div>

        {/* 🔹 Right Side (Search + Mobile Menu) */}
        <div className="flex items-center gap-3">
          {/* 🔹 Search Icon */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              {searchOpen ? <X size={20} /> : <Search size={20} />}
            </button>

            {/* 🔹 Search Dropdown */}
            <AnimatePresence>
              {searchOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 right-0 bg-white border border-gray-200 rounded-xl shadow-lg w-72 p-3 z-50"
                >
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />

                  {/* 🔹 Natijalar */}
                  <div className="mt-2 max-h-64 overflow-y-auto">
                    {filtered.length > 0 ? (
                      filtered.map((item) => (
                        <div
                          key={item._id}
                          onClick={() => {
                            router.push(`/product/${item._id}`);
                            setSearchOpen(false);
                            setQuery("");
                          }}
                          className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg cursor-pointer transition"
                        >
                          <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                              src={
                                Array.isArray(item.image)
                                  ? item.image[0]
                                  : item.image || "/placeholder.png"
                              }
                              alt={item.name}
                              fill
                              className="object-cover rounded-md"
                              unoptimized
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-800 truncate">
                              {item.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              ${item.offerPrice}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : query.length > 1 ? (
                      <p className="text-sm text-gray-500 text-center py-4">
                        No results found
                      </p>
                    ) : (
                      <p className="text-sm text-gray-400 text-center py-4">
                        Start typing to search...
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 🔹 Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg border-l border-gray-200 flex flex-col px-6 py-10 z-40 md:hidden"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            <ul className="flex flex-col gap-6 mt-12 text-lg">
              {[
                { href: "/", label: "Home" },
                { href: "/all-products", label: "All Products" },
                { href: "/about", label: "About" },
                { href: "/aign-up", label: "Sign Up" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-gray-700 hover:text-black transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {isSeller && (
                <li>
                  <button
                    onClick={() => {
                      router.push("/seller");
                      setMobileOpen(false);
                    }}
                    className="text-xs border px-4 py-2 rounded-full w-full hover:bg-black hover:text-white transition"
                  >
                    Seller Dashboard
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
