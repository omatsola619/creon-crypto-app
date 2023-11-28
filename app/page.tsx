import Navbar from '@/components/Navbar'
import Image from 'next/image';
import heroImg from '../assets/image/hero.png'

export default function Home() {
  return (
    <main className="">
      <div className='h-[600px] relative bg-hero-bg bg-cover'>
        <div className="absolute inset-0">
          <div className="h-[500px] w-full absolute bottom-0 left-[0%] bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className='w-full absolute'>
          <Navbar />
        </div>

      </div>
    </main >
  )
}
