import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function EmailSignupForm() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-[280px] sm:max-w-md mx-auto mt-8 sm:mt-0">
      <Input
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-64 h-11 rounded-full px-6 border-2 border-gray-200 bg-white focus-visible:ring-[#6B4EFF] focus-visible:ring-offset-0 focus-visible:border-[#6B4EFF]"
      />
      <Button 
        className="w-full sm:w-auto h-11 px-6 rounded-full bg-[#6B4EFF] hover:bg-[#5B3FFF] text-white font-medium shadow-sm hover:shadow-md transition-all"
      >
        Join waitlist →
      </Button>
    </div>
  )
} 