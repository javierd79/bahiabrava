"use client"

import React from 'react';
import PDFViewer from '../components/PDFViewer';
import Image from 'next/image';

function Menu() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden overflow-y-hidden">
      <section className='home flex flex-col items-center justify-start flex-1 py-4 w-full h-screen overflow-hidden overflow-y-hidden'>
        <PDFViewer />
        <div className='flex z-50 pt-2 w-full justify-center' style={{
          padding: '0 1.25rem 0 1.25rem'
        }}>
          <div className='father flex w-full justify-center' style={{
            background: 'rgb(33, 36, 42)',
          }}>
          <div className='xs:pt-0 pt-6 pr-3'>
            <a 
              className="sm:text-md opacity-100 hover:opacity-100 hover:bg-sky-200 p-4 mx-5 text-xs bg-white mt-0 rounded-xs shadow-lg"
              href="https://wa.me/584246279056?text=¡Hola!%20Me%20gustaría%20ordenar." 
              type="button"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                bottom: '2rem',
                right: '100px',
                fontWeight: 300
              }}
            >
              Ordena tu pedido aquí
            </a>
          </div>
          <a
            className="w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 mt-0 hover:rotate-12"
            title="Siguenos en Instagram!"
            href="https://www.instagram.com/bahiabravamcbo/"
            target="_blank"
            style={{
              marginTop: '1rem',
              right: '20px'
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
        </div>
      </section>
    </main>
  )
}

export default Menu