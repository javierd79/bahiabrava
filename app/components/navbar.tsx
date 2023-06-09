import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface INavbar {
  links: {
    label: string;
    route: string;
  }[];
}

function Navbar({ links }: INavbar) {
  return (
    <>
      <div className="flex flex-wrap place-items-center my-0">
        <section className="relative mx-auto">
          <div className="bg-white w-100">
            <nav className="flex justify-between bg-bahia-blue-1 navbar text-black w-screen top-0">
              <div className="px-5 py-6 flex w-full items-center">
                <a className="text-xl font-bold font-heading" href="#">
                  <Image
                    className="object-cover object-center w-full h-full rounded-full"
                    alt="Bahia Brava Logo"
                    width={35}
                    height={35}
                    src='/bahialogo.png'
                  />
                </a>
              </div>
              <div className="hidden py-6 xl:flex w-full items-center justify-end px-5">
                <ul className="hidden xl:flex font-semibold font-heading space-x-12">
                  {
                    links.map((link, index) => (
                      <li key={index}>
                        <Link className="hover:text-sky-700 text-black" href={link.route}>
                          {link.label}
                        </Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <a className="xl:hidden flex mr-6 items-center" href="#">
              </a>
              <a className="navbar-burger self-center px-5 xl:hidden" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </section>
      </div>
      <div className="absolute bottom-5 right-5 mb-4 mr-8 z-10">
        <div>
          <a
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            title="Siguenos en Instagram!"
            href="https://www.instagram.com/bahiabravamcbo/"
            target="_blank"
          >
            <Image
              className="object-cover object-center w-full h-full rounded-full"
              alt="RRSS Logo"
              width={100}
              height={100}
              src='/instagramlogo.png'
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
