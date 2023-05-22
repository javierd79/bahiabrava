"use client"

import React from 'react';
import PDFViewer from '../components/PDFViewer';
import Image from 'next/image';

function Menu() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden overflow-y-hidden">
      <section className='home flex flex-col items-center justify-start flex-1 py-4 w-full h-screen overflow-hidden overflow-y-hidden'>
        <PDFViewer />
        <div className="absolute bottom-5 right-5 mb-4 mr-8 z-10">
        <div className='flex'>
          <a
            className="fixed w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
            title="Siguenos en Instagram!"
            href="https://www.instagram.com/bahiabravamcbo/"
            target="_blank"
            style={{
              bottom: '1.6rem',
              right: '10px'
            }}
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
        <a 
          className="fixed sm:text-md opacity-100 hover:opacity-100 hover:bg-sky-200 p-4 mx-5 text-sm bg-white mt-0 rounded-xs shadow-lg"
          href="https://wa.me/584246279056?text=¡Hola!%20Me%20gustaría%20ordenar." 
          type="button"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            bottom: '2rem',
            right: '90px',
            fontWeight: 300
          }}
        >
          Ordena tu pedido aquí
        </a>
      </div>
      </section>
    </main>
  )
}

export default Menu