import Image from 'next/image'
import EmailSignupForm from './EmailSignupForm'

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FBFAFE] to-[#CFBDFF] px-4 sm:px-6 lg:px-8 flex flex-col">
      <nav className="flex sm:hidden py-4 justify-start">
        <Image
          src="/Nujuum-Small.png"
          alt="Nujuum Logo"
          width={96}
          height={96}
          className="w-16 h-16"
        />
      </nav>
      
      <div className="max-w-6xl mx-auto pt-8 sm:pt-16 text-center flex-grow">
        <Image
          src="/Nujuum.png"
          alt="Nujuum Full Logo"
          width={480}
          height={159}
          className="w-[280px] sm:w-[480px] mx-auto mb-12 sm:mb-16"
        />
        
        <p className="text-gray-600 uppercase tracking-wide text-xs sm:text-sm mb-8">
          Alongside a community of language learners
        </p>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#2D2851] mb-8 px-4">
          Learn Spoken Arabic
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-20 sm:mb-16 px-4">
          Daily guided lessons from native speakers
        </p>

        <EmailSignupForm />
      </div>
    </main>
  )
} 