import React from 'react'
import emailjs from '@emailjs/browser'

import { Box, Grid, Typography } from '@mui/material'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import ChatRoundedIcon from '@mui/icons-material/ChatRounded'
import { CartContext } from '../../context/CartContext'
import { formatter } from '../../utils/formatPrice'

import Input from '../Input/Input'
import Button from '../button/Index'
import Card from '../cart/Card'

const INPUTS = [
  {
    label: 'Name',
    placeholder: 'Name',
    name: 'user_name',
    type: 'text',
    icon: <PersonRoundedIcon />,
  },
  {
    label: 'Email',
    placeholder: 'Email',
    name: 'user_email',
    type: 'email',
    icon: <EmailRoundedIcon />,
  },
  {
    label: 'Bestellung',
    placeholder: 'Zum Beispiel: 1 Weisbrot, 3 Doppelweck',
    name: 'message',
    type: 'text',
    icon: <ChatRoundedIcon />,
    multiline: true,
  },
]

const OrderForm: React.FC = () => {
  const form = React.useRef<HTMLFormElement | string>('null')
  const [showSuccess, setShowSuccess] = React.useState(false)
  const { items, totalPrice } = React.useContext(CartContext)

  return (
    <Box sx={styles.container}>
      {showSuccess && (
        <Box sx={styles.success}>
          <Typography variant="body1" mb={2}>
            Vielen Dank für deine Bestellung!
          </Typography>
          <Button onClick={() => setShowSuccess(false)} color="inherit">
            Noch etwas bestellen
          </Button>
        </Box>
      )}

      {!showSuccess && (
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={2}>
            {items.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </Grid>
          <Typography variant="h2">
            Summe: {formatter.format(totalPrice)}
          </Typography>
          <Button type="submit" size="large">
            Bestellen
          </Button>
        </Box>
      )}
    </Box>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
  },
  success: {
    mt: 2,
    p: 2,
    boxShadow: 1,
    width: '100%',
    bgcolor: 'background.paper',
    borderRadius: '8px',
  },
}

export default OrderForm
