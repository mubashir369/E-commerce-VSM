export interface CustomerReview {
  user: string
  rating: number
  comment: string
}

export interface Product {
  id: number
  name: string
  image: string
  price: number
  mrp?: number
  offerPrice?: number
  purchasePrice?: number
  rating?: number
  reviews?: CustomerReview[]   // <-- full review objects
  category: string
  subCategory?: string
  description?: string
  gallery?: string[]
  sizes?: string[]
  colors?: string[]
}