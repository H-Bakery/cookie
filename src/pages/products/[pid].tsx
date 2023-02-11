import React from 'react'
import { Box, Chip, Container, Grid, Typography } from '@mui/material'

import Base from '../../layout/Base'
import Hero from '../../components/Hero'
import { useRouter } from 'next/router'
import { PRODUCTS } from '../../mocks/products'
import { Product } from '../../components/products/types'
import { formatter } from '../../utils/formatPrice'
import Button from '../../components/button/Index'
import { CartContext } from '../../context/CartContext'
import { useProduct } from '../../hooks/useProduct'

const Index: React.FC = () => {
  const router = useRouter()
  const { pid } = router.query

  const { data, isLoading, isFetching } = useProduct(String(pid))
  const loading = isLoading && isFetching

  const { add } = React.useContext(CartContext)

  return (
    <Base>
      <Container maxWidth="sm">
        {loading && <Typography>Loading...</Typography>}
        {data && (
          <>
            <Hero title={data.title} />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    ...styles.image,
                    backgroundImage: `url(${data.image_url})`,
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography color="text.secondary" variant="body2">
                  {data.description}
                </Typography>
                <Box sx={styles.footer}>
                  <Typography variant="button" fontSize="16px">
                    {formatter.format(data.price)}
                  </Typography>
                </Box>
                <Button
                  data-cy="add-to-cart"
                  sx={{ mt: 2 }}
                  onClick={() => add(data.id)}
                >
                  Zum Warenkorb
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Base>
  )
}

const styles = {
  image: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: { xs: '45vw', sm: '260px' },
    width: '100%',
    borderRadius: '8px',
    boxShadow: 1,
    mb: 2,
    bgcolor: 'background.paper',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& img': {
      maxWidth: '80%',
    },
  },
  footer: {
    mt: 2,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export async function getStaticProps({ ...ctx }) {
  const { pid } = ctx.params

  console.log('products pid', pid)
  return {
    props: {
      pid,
    },
  }
}
export async function getStaticPaths() {
  // const files = fs.readdirSync('projects')
  // const news: NewsType[] = NEWS.filter((item) => slug === item.slug)

  const paths = PRODUCTS.map((item) => ({
    params: {
      pid: item.id.toString(),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Index
