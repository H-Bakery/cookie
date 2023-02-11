import React from 'react'
import { Box, Container } from '@mui/material'

import Base from '../layout/Base'
import Hero from '../components/Hero'
import Form from '../components/orders/Form'
import Button from '../components/button/Index'

const Index: React.FC = () => (
  <Base>
    <Hero title="Bestellen" />
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Form />
      </Container>
    </Box>
  </Base>
)

const styles = {
  button: { mx: 1 },
}

export default Index
