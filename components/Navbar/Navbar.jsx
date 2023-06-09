import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='mb-[2rem]'>
      <nav className="w-full bg-[#F9FAFD] fixed top-0 left-0 right-0 z-[100000]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between">
              {/* LOGO */}
              <Link href="/">
                <img src="./saibaBlackLogo.png" alt="" className='w-[200px] max-h-[80px]' style={{objectFit: "cover"}}/>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-[#025DBE] focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image src="./close.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <Image
                      src="./harmburger-menu.svg"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-lg text-black py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-[#C5D1EB]  border-[#C5D1EB]  md:hover:text-black md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#C5D1EB]  border-[#C5D1EB]  md:hover:text-black md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#C5D1EB]  border-[#C5D1EB]  md:hover:text-black md:hover:bg-transparent">
                  <Link href="#events-section" onClick={() => setNavbar(!navbar)}>
                    Events
                  </Link>
                </li>
                <li className="pb-6 text-lg text-black py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-[#C5D1EB]  border-[#C5D1EB]  md:hover:text-black md:hover:bg-transparent">
                  <Link href="#contact-section" onClick={() => setNavbar(!navbar)}>
                    Contact 
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;