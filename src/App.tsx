/** @format */

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Coffee,
  Utensils,
  MapPin,
  Phone,
  Clock,
  Star,
  ChevronDown,
  Camera,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Indomie Goreng Spesial",
      price: "Rp 15.000",
      desc: "Indomie goreng dengan telur, sosis, dan sayuran",
    },
    {
      name: "Indomie Kuah Seafood",
      price: "Rp 18.000",
      desc: "Indomie kuah dengan topping seafood segar",
    },
    {
      name: "Indomie Jumbo",
      price: "Rp 22.000",
      desc: "Porsi besar dengan double telur dan ayam",
    },
    {
      name: "Kopi Susu Gula Aren",
      price: "Rp 12.000",
      desc: "Kopi robusta dengan gula aren asli",
    },
    {
      name: "Es Kopi Dino",
      price: "Rp 15.000",
      desc: "Signature coffee dengan rasa unik",
    },
    {
      name: "Teh Tarik Hangat",
      price: "Rp 8.000",
      desc: "Teh tarik tradisional yang creamy",
    },
  ];

  const galleryPhotos = [
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/1438674/pexels-photo-1438674.jpeg?auto=compress&cs=tinysrgb&w=800",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-emerald-600">
                🦕 Miendo
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#home"
                  className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#menu"
                  className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Menu
                </a>
                <button
                  onClick={() => setIsGalleryOpen(true)}
                  className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  <Camera className="w-4 h-4 mr-1" />
                  Gallery
                </button>
                <a
                  href="#about"
                  className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-emerald-600 focus:outline-none"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </a>
              <a
                href="#menu"
                className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Menu
              </a>
              <button
                onClick={() => setIsGalleryOpen(true)}
                className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                Gallery
              </button>
              <a
                href="#about"
                className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-emerald-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-bounce mb-8">
            <div className="text-8xl mb-4">🦕</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Welcome to <span className="text-emerald-600">Miendo</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Warung Indomie & Kopi Tongkrongan dengan Nuansa Hijau Dino yang
            Smooth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#menu"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Lihat Menu
            </a>
            <button
              onClick={() => setIsGalleryOpen(true)}
              className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Gallery Foto
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-emerald-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Tentang <span className="text-emerald-600">Miendo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Warung tongkrongan dengan konsep unik yang menggabungkan kelezatan
              Indomie dan kopi dengan nuansa hijau yang menenangkan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-6xl mb-6">🦕☕</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Konsep Dino Smooth
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Terinspirasi dari kehidupan dinosaurus yang damai, Miendo
                menghadirkan suasana hijau yang menenangkan dengan menu Indomie
                kreatif dan kopi berkualitas. Tempat yang perfect untuk
                nongkrong santai bersama teman-teman.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <Utensils className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">
                    20+ Menu Indomie
                  </p>
                </div>
                <div className="text-center p-4 bg-emerald-50 rounded-lg">
                  <Coffee className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">Kopi Premium</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">🌿</div>
                <h4 className="text-2xl font-bold mb-4">
                  Suasana Hijau Natural
                </h4>
                <p className="mb-6">
                  Dekorasi hijau alami dengan tanaman asli yang menciptakan
                  atmosfer sejuk dan menenangkan, cocok untuk bersantai dan
                  bekerja.
                </p>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-300 mr-1" />
                  <Star className="w-5 h-5 text-yellow-300 mr-1" />
                  <Star className="w-5 h-5 text-yellow-300 mr-1" />
                  <Star className="w-5 h-5 text-yellow-300 mr-1" />
                  <Star className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="text-sm">4.9/5 Rating Pelanggan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Menu <span className="text-emerald-600">Favorit</span>
            </h2>
            <p className="text-xl text-gray-600">
              Pilihan menu terbaik dengan cita rasa yang tak terlupakan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{index < 3 ? "🍜" : "☕"}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-emerald-600">
                    {item.price}
                  </span>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-colors">
                    Pesan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Kunjungi <span className="text-emerald-400">Miendo</span>
            </h2>
            <p className="text-xl text-gray-300">
              Temukan kami dan nikmati pengalaman tongkrongan yang berbeda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Alamat</h3>
              <p className="text-gray-300">
                Jl. Tongkrongan No. 123
                <br />
                Malang, Jawa Timur
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Telepon</h3>
              <p className="text-gray-300">
                +62 123 456 789
                <br />
                WhatsApp Ready
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Jam Buka</h3>
              <p className="text-gray-300">
                Setiap Hari
                <br />
                08:00 - 23:00 WIB
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-4">
              🦕 Miendo
            </div>
            <p className="text-gray-400 mb-4">
              Warung Indomie & Kopi Tongkrongan dengan Nuansa Hijau Dino yang
              Smooth
            </p>
            {/* Powered By Section */}
            <div className="py-6 border-t border-gray-800">
              <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-4">
                <span className="text-gray-400 text-sm">Powered by</span>
                <a
                  href="https://lintasinovasiglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
                >
                  <img
                    src="/logo-ligal.png"
                    alt="PT. Lintas Inovasi Global"
                    className="h-10 w-auto"
                  />
                  <span className="text-gray-300 text-sm font-semibold hover:text-emerald-400 transition-colors">
                    PT. Lintas Inovasi Global
                  </span>
                </a>
              </div>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Miendo. All rights reserved. Made with 💚 for dino lovers
            </p>
          </div>
        </div>
      </footer>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">
                  Gallery Miendo
                </h3>
                <button
                  onClick={() => setIsGalleryOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryPhotos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <img
                      src={photo}
                      alt={`Gallery ${index + 1}`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Suasana hangat dan menu lezat di Miendo 🦕
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
