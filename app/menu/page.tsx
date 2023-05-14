import React from 'react'
import Navbar from '../components/navbar'

type Props = {}

function Menu({}: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar links={[
        {label: 'Home', route: '/'},
        {label: 'Menú', route: '/menu'}
      ]} />
      <section className='menu flex flex-col items-center justify-start flex-1 py-4 w-full h-100 px-20 bg-sky-100'>
        <h1 className='sm:text-3xl text-xl font-bold'>
          Menú
        </h1>
      </section>
    </main>
  )
}

export default Menu