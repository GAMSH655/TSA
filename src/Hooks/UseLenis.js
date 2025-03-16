// src/hooks/useLenis.js
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
const useLenis = () => {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy() // Cleanup when unmounting
    }
  }, [])

  return lenisRef
}

export default useLenis
