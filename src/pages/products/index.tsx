import React from 'react'
import { Box, Container, Grid } from '@mui/material'

import Base from '../../layout/Base'
import Hero from '../../components/Hero'
import { Product, useProducts } from '../../hooks/useProducts'
import ProductCard from '../../components/home/products/ProductCard'

const Index = () => {
  const { data, isLoading, isFetching } = useProducts()
  const loading = isLoading || isFetching

  return (
    <Base>
      <Hero title="Sortiment" />
      <Box mb={6}>
        <Container>
          {loading && <div>Loading</div>}
          <Grid container spacing={3}>
            {data &&
              data.map((product: Product) => (
                <Grid key={product.id} item xs={3}>
                  <ProductCard
                    id={product.id}
                    name={product.title}
                    image={product.image_url}
                    price={product.price}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
      </Box>
    </Base>
  )
}

const styles = {
  container: {
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
  },
}

export default Index
