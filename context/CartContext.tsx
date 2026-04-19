'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface CartContextType {
  items: number
  total: number
  addToCart: (name: string, price: number) => void
}

const CartContext = createContext<CartContextType>({
  items: 0,
  total: 0,
  addToCart: () => {},
})

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState(0)
  const [total, setTotal] = useState(0)

  const addToCart = (_name: string, price: number) => {
    setItems((p) => p + 1)
    setTotal((p) => p + price)
  }

  return (
    <CartContext.Provider value={{ items, total, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
