// src/types/product/product.ts
export interface Product {
  id: number
  name: string
  image: string
  price: number
  mrp?: number
  rating?: number
  category: string
  subCategory?: string
  description?: string
  gallery?: string[]
  sizes?: string[]        
  colors?: string[]     
}
