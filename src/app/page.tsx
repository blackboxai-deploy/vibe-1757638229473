'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function HelloPage() {
  const [currentTime, setCurrentTime] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const handleGreeting = () => {
    const greetings = [
      "Hello there! 👋",
      "Welcome! 🌟",
      "Greetings! ✨",
      "Nice to see you! 😊",
      "Hello, wonderful! 🎉"
    ]
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]
    alert(randomGreeting)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Main Hero Section */}
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Hello!
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
              Welcome to this beautiful hello page. We&apos;re delighted to have you here.
            </p>
          </div>
          
          {/* Current Time Display */}
          <div className="text-lg text-gray-500 font-medium">
            {currentTime}
          </div>
        </div>

        {/* Interactive Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-blue-600 flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                Welcome
              </CardTitle>
              <CardDescription>
                Thanks for visiting our hello page
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                This page was built with modern web technologies including Next.js, Tailwind CSS, and shadcn/ui components.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-purple-600 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Modern Tech
              </CardTitle>
              <CardDescription>
                Built with the latest technologies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Featuring responsive design, smooth animations, and an elegant user interface that works beautifully across all devices.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-white/70 backdrop-blur-sm border-0 shadow-md md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-pink-600 flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                Beautiful Design
              </CardTitle>
              <CardDescription>
                Clean and modern aesthetics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Carefully crafted with attention to typography, spacing, and visual hierarchy for the best user experience.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Button Section */}
        <div className="text-center space-y-4">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to explore?
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Click the button below for a friendly surprise greeting!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleGreeting}
              className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Say Hello Back! 👋
            </Button>
            
            <Button 
              variant="outline"
              className="px-8 py-3 text-lg font-medium border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-8 border-t border-gray-200/50">
          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </div>
  )
}