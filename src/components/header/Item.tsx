import React from 'react'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router'

interface Props {
  id: string
  label: string
  path: string
  cta?: boolean
}

const Item: React.FC<Props> = (props) => {
  const { id, label, path, cta = false } = props
  const { pathname } = useRouter()
  const isActive = pathname === path

  return (
    <Link href={path}>
      <Box
        id={`menu-item-${id}`}
        sx={styles}
        className={`menu-item ${cta && 'cta'} ${isActive && 'active'}`}
      >
        <Typography variant="button">{label}</Typography>
      </Box>
    </Link>
  )
}

const styles = {
  bgcolor: 'background.default',
  px: '12px',
  py: '8px',
  borderRadius: '8px',
  fontSize: '16px',
  boxShadow: 1,
  cursor: 'pointer',
  transition: 'all ease-in-out 200ms',

  '&:hover': {
    bgcolor: 'text.primary',
    color: 'background.paper',
  },

  '&.active': {
    bgcolor: 'text.primary',
    color: 'background.paper',
  },

  '&.cta': {
    color: 'common.white',
    bgcolor: 'primary.main',

    '&:hover': {
      bgcolor: 'primary.dark',
    },
  },
}

export default Item
