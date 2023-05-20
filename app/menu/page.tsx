"use client"

import React, { useState, useEffect } from 'react';
import PDFViewer from '../components/PDFViewer';

function Menu() {
  const URL = '/bahia-brava-menu.pdf'
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden overflow-y-hidden">
      <section className='home flex flex-col items-center justify-start flex-1 py-4 w-full h-screen px-20 overflow-hidden overflow-y-hidden'>
        {
          loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
            </div>
          ) : (
            <PDFViewer url={URL} />
          )
        }
      </section>
    </main>
  )
}

export default Menu