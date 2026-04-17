'use client'

import { useState } from 'react'
import { X, Zap } from 'lucide-react'

const messages = [
  'Free shipping on orders over ₹1499 — Limited time offer',
  'New flavors just dropped — Chocolate Crunch & Salted Caramel',
  '25g protein per bar — Zero added sugar — 100% natural ingredients',
  'Buy 2 boxes, get 1 FREE — Use code FORGE3 at checkout',
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-[#c8f135] text-[#0d0d0d] overflow-hidden">
      <div className="flex items-center justify-center py-2.5 px-10">
        <div className="overflow-hidden w-full max-w-3xl">
          <div className="flex animate-ticker whitespace-nowrap gap-20">
            {[...messages, ...messages].map((msg, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]">
                <Zap className="h-3 w-3 flex-shrink-0 fill-current" />
                {msg}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:opacity-60 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
