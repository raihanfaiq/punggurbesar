import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube, faWhatsapp, faBehance } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-[#222222] pb-4">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 ">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 lg:grid-cols-8 ">
          {/* 1nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 ">
            <h2 className="font-medium text-[25px] mb-2 text-white">Tentang Desa</h2>
            <ul className="text-sm ">
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Nilai-Nilai
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Proses Berkebun
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Sejarah Desa
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Fasilitas Desa
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Peta
                </a>
              </li>
            </ul>
          </div>

          {/* 2rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 pt-4">
            <h2 className="text-white font-medium text-[25px] mb-2">Komoditas</h2>

            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Komoditas Mentah
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Produk Olahan
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 pt-4">
            <img className="mx-auto pb-6" src="/images/logo.png" alt="" />

            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  KKN-PPM UGM 2023
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  © All Rights Reserved
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2 pt-4">
            <h6 className="text-white font-medium mb-2">Kontak</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Telefon: 085251853685
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-white hover:text-gray-900 transition duration-150 ease-in-out">
                  Email: punggurbesar@desakkr.id
                </a>
              </li>
              <li className="mb-2">
                <div className="flex justify-center">
                  <div className="flex items-center space-x-4 text-white">
                    <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
                    <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
                    <FontAwesomeIcon icon={faYoutube} className="text-3xl" />
                    <FontAwesomeIcon icon={faBehance} className="text-3xl" />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Copyrights note */}
          {/* <div className="text-sm text-gray-600 mr-4">&copy; Cruip.com. All rights reserved.</div> */}
        </div>
      </div>
    </footer>
  );
}
