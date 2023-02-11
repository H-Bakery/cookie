import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface Product {
  id: number
  title: string
  image_url: string
  description: string
  price: number
}

const fetchProduct = async (slug: string) => {
  const response = axios
    .get(`http://192.168.178.34:3000/products/${slug}`)
    .then((res) => res.data)
  return response
}

const useProduct = (slug: string) => {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => fetchProduct(slug),
  })
}

export { useProduct, fetchProduct }
