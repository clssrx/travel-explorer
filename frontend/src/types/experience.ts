export type Category = 'Adventure' | 'Culture' | 'Food & Drink'

export interface Experience {
  id: number
  title: string
  location: string
  category: Category
  price: number
  duration: string
  rating: number
  image: string
  description: string
}
