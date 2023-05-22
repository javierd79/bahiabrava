"use client"

import React, { useRef, useEffect } from 'react';
import PDFViewer from '../components/PDFViewer';

function Menu() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden overflow-y-hidden">
      <section className='home flex flex-col items-center justify-start flex-1 py-4 w-full h-screen overflow-hidden overflow-y-hidden'>
        <PDFViewer />
      </section>
    </main>
  )
}

export default Menu