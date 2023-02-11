import React from 'react'
import { useRouter } from 'next/router'
import { Box, Typography } from '@mui/material'

import Base from '../layout/Base'
import Hero from '../components/home/hero/Hero'
import Products from '../components/home/products'
import Testimonial from '../components/home/testimonial'
import News from '../components/home/news'
import { featuredProducts } from '../mocks/products/featured'
import Button from '../components/button/Index'

const Index: React.FC = () => {
  const router = useRouter()
  return (
    <Base>
      <Hero />
      <Products
        sx={{ py: 6 }}
        header={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 4,
            }}
          >
            <Typography component="h2" variant="h3">
              Sortiment
            </Typography>
            <Button id="more-products" onClick={() => router.push('products')}>
              Mehr
            </Button>
          </Box>
        }
        items={featuredProducts}
      />
      <Testimonial />
      <News
        header={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 4,
              mb: 2,
            }}
          >
            <Typography component="h2" variant="h3">
              Neuigkeiten
            </Typography>
            <Button onClick={() => router.push('news')}>Mehr</Button>
          </Box>
        }
      />
    </Base>
  )
}

export default Index
