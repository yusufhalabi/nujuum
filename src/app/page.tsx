import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FBFAFE] to-[#CFBDFF] px-4 sm:px-6 lg:px-8">
      <nav className="py-4 flex justify-start">
        <Image
          src="/Nujuum-Small.png"
          alt="Nujuum Logo"
          width={96}
          height={96}
          className="w-24 h-24"
        />
      </nav>
      
      <div className="max-w-6xl mx-auto -mt-8 text-center">
        <Image
          src="/Nujuum.png"
          alt="Nujuum Full Logo"
          width={480}
          height={159}
          className="w-[480px] mx-auto mb-12"
        />
        
        <p className="text-gray-600 uppercase tracking-wide text-sm mb-4">
          Alongside a community of language learners
        </p>
        
        <h1 className="text-4xl sm:text-6xl font-bold text-[#2D2851] mb-4">
          Learn Spoken Arabic
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-600 mb-8">
          Daily guided lessons from native speakers
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 px-5 py-2.5 rounded-full border-2 border-gray-200 focus:outline-none focus:border-[#6B4EFF] focus:ring-0 text-sm"
          />
          <button className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#6B4EFF] text-white text-sm font-medium hover:bg-[#5B3FFF] transition-colors shadow-sm hover:shadow-md">
            Join waitlist →
          </button>
        </div>
      </div>
    </main>
  )
} 