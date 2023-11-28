import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <main className="">
      <div className='h-[100vh] relative bg-hero-bg bg-cover bg-center'>
        <div className="absolute inset-0">
          <div className="h-[500px] w-full absolute bottom-0 left-[0%] bg-gradient-to-t from-black to-transparent"></div>
        </div>
        <div className='w-full absolute'>
          <Navbar />
        </div>

        {/* large intro text  */}
        <div className='absolute top-[40%] md:top-[50%] lg:left-[10%] px-5 sm:px-10 flex-col items-center'>
          <div className='text-white text-[25px] sm:text-[40px] lg:text-[58px] font-monument w-[100%] sm:w-[70%] md:w-[100%] mb-[47px]'>The WORLDS first <br /> platform for Tokenizing AI <br /> blockchain projects</div>

          <div
            className='
                text-transparent 
                bg-clip-text 
                bg-gradient-to-r 
                from-[#3D8BFF]
                from-0% 
                to-[#AB23FF]
                to-100%
                border-y
                border-y-[#3D8BFF]
                inline
                py-1
                '
          >Hold the Creon Pass NFT and earn passive income from AI Tools</div>
        </div>

      </div>
    </main >
  )
}
