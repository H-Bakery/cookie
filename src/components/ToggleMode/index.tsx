import React from 'react'

import { Box } from '@mui/material'
import Sun from '@mui/icons-material/LightModeRounded'
import Moon from '@mui/icons-material/DarkModeRounded'
import { ModeContext } from '../../context/ModeContext'

const ToggleMode = () => {
  const { mode, setMode } = React.useContext(ModeContext)

  const toggleMode = () => {
    setMode(mode === 'dark' ? 'light' : 'dark')
  }

  return (
    <Box
      data-cy="toggleMode"
      data-theme={String(mode)}
      onClick={toggleMode}
      sx={styles.root}
    >
      <Box sx={styles.wrapper} className={mode}>
        <Box sx={styles.icon}>
          <Sun />
        </Box>
        <Box sx={styles.icon}>
          <Moon />
        </Box>
      </Box>
    </Box>
  )
}

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 40,
    width: 40,
    borderRadius: 2,
    bgcolor: 'background.default',
    boxShadow: 1,
    overflow: 'hidden',
    cursor: 'pointer',
  },
  wrapper: {
    width: 40,
    height: 80,
    transition: 'transform 0.16s ease-in-out',
    '&.dark': {
      transform: 'translateY(-40px)',
    },
  },
  icon: {
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      color: 'text.secondary',
    },
  },
}

export default ToggleMode
