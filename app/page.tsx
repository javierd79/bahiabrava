import Image from 'next/image'
import Navbar from './components/navbar'
export default function Home() {
  return (
    <main className="flex overflow-hidden min-h-screen flex-col items-center justify-between">
      <div className='px-10 bg-bahia-bg-1'>
        <Navbar links={[
          {label: 'Home', route: '/'},
          {label: 'Menú', route: '/menu'}
        ]} />
      </div>
      <section className='home flex flex-col items-center pb-24 justify-center flex-1 w-full h-100 px-20 text-center'>
        <h1 className='sm:text-6xl text-3xl font-bold'>
          Bahía Brava
        </h1>
        <p className='mt-3 sm:text-2xl text-md'>
          Una propuesta gastronómica Del Mar a la mesa
        </p>
        <p className='pt-8 sm:text-2xl text-md'>
          Escanea nuestro menú aquí
        </p>
        <div className='flex flex-row items-center justify-center pt-2'>
          <Image className="object-cover object-center rounded-md" alt="QR" width={300} height={300} src='/qr.png'/>
        </div>
      </section>
    </main>
  )
}
