import { Box } from '@mui/material'

import { Meta } from './Meta'
import { AppConfig } from '../utils/AppConfig'
import Header from '../components/header'
import Footer from '../components/footer/Index'
import Cart from '../components/cart'

interface Props {
  children: React.ReactNode
}

const Base: React.FC<Props> = ({ children }) => (
  <Box
    sx={{
      bcolor: 'background.default',
    }}
  >
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <Box sx={{ minHeight: 'calc(100vh - 332px)' }}>{children}</Box>
    <Cart />
    <Footer />
  </Box>
)

export default Base
