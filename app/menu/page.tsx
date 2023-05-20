"use client"

import React, { useState, useEffect } from 'react';
import PDFViewer from '../components/PDFViewer';
import Link from 'next/link';

function Menu() {
  const URL = 'https://bahiabrava.vercel.app/bahia-brava-menu.pdf'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      window.location.href = URL
    }, 3000)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden overflow-y-hidden">
      <section className='home flex flex-col items-center justify-start flex-1 py-4 w-full h-screen px-20 overflow-hidden overflow-y-hidden'>
        {
          !loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-screen">
              <h1 className='sm:text-2xl text-xl font-bold'>
                Redirigiendo al menú...<br />
              </h1>
            </div>
          )
        }
      </section>
    </main>
  )
}

export default Menu