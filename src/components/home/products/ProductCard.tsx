import React from 'react'
import { useRouter } from 'next/router'
import { Box, Chip, Typography } from '@mui/material'

import { formatter } from '../../../utils/formatPrice'

interface Props {
  id: number
  name: string
  image: string
  price: number
}

const ProductCard: React.FC<Props> = (props) => {
  const { id, name, image, price } = props

  const router = useRouter()

  return (
    <Box
      data-cy={`product-card-${id}`}
      sx={styles.card}
      onClick={() => router.push(`products/${id}`)}
      className="product-card"
    >
      <Box
        sx={{
          ...styles.image,
          backgroundImage: `url(${image})`,
        }}
        className="image"
      ></Box>
      <Typography sx={styles.name}>{name}</Typography>
      {price && (
        <Box sx={styles.footer}>
          <Typography variant="button" fontSize="16px">
            {formatter.format(price)}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

const styles = {
  card: {
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 1,
    display: 'flex',
    flexDirection: 'column',
    p: 1,
    transition: 'all ease-in-out 200ms',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      '& .image': {
        bgcolor: 'grey.50',
      },
    },
  },
  image: {
    bgcolor: 'text.disabled',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 1,
    minHeight: 160,
    transition: 'all ease-in-out 300ms',
    '& img': {
      maxWidth: '90%',
      maxHeight: 120,
    },
  },
  name: {
    fontWeight: 'bold',
    mb: 1,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}

export default ProductCard
