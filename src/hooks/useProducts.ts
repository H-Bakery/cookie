import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export interface Product {
  id: number
  title: string
  image_url: string
  description: string
  price: number
}

const fetchProducts = async () => {
  const response = axios
    .get('http://192.168.178.34:3000/products')
    .then((res) => res.data)
  return response
}

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => fetchProducts(),
  })
}

export { useProducts, fetchProducts }
