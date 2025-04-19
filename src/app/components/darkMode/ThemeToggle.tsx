'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import"./toggle.css"
export default function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) return null
  return (
 <div>
   <label className="switch">
    <input type="checkbox" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
    <span className="slider" />
  </label>
 </div>


  //   <button
  //   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
  //   className=" p-2 border rounded"
  // >
  //   {theme === 'dark' ? '🌙' : ' ☀️ '}
  // </button>
  )
}
