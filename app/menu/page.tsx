"use client"

import React, { useRef, useEffect } from 'react';
import PDFViewer from '../components/PDFViewer';

function Menu() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden overflow-y-hidden">
      <section className='home flex flex-col items-center justify-start flex-1 py-4 w-full h-screen overflow-hidden overflow-y-hidden'>
        <PDFViewer />
        <a 
          className="fixed bottom-5 opacity-100 hover:opacity-100 hover:bg-sky-200 right-10 p-4 text-xl bg-bahia-blue-1 rounded-full shadow-lg"
          href="https://web.whatsapp.com/" 
          type="button"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontWeight: 300
          }}
        >
          Quiero ordenar ya mismo
        </a>
      </section>
    </main>
  )
}

export default Menu