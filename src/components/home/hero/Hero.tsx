import React from 'react'
import { Box } from '@mui/material'
import Baeckerei from '../../icons/brand/Baeckerei'
import Wappen from '../../icons/brand/Wappen'

const Hero: React.FC = () => {
  React.useEffect(() => {
    const video: HTMLVideoElement = document.getElementById(
      'background-video'
    ) as HTMLVideoElement
    video.play()
  }, [])

  return (
    <Box id="home-hero" sx={styles.hero}>
      <Box sx={styles.logo}>
        <Wappen />
        <Baeckerei />
      </Box>
      <Box sx={styles.overlay} />
      <video
        className="video"
        id="background-video"
        playsInline
        preload="none"
        autoPlay
        muted={true}
        loop
      >
        <source src="/assets/images/stock/bg_video.mp4" type="video/mp4" />
        <source src="/assets/images/stock/bg_video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </Box>
  )
}

export default Hero

const styles = {
  hero: {
    height: '100vh',
    widht: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& .video': {
      position: 'absolute',
      width: '100%',
      height: '100vh',
      objectFit: 'cover',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 0,
    },
  },
  logo: {
    position: 'relative',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    transform: { xs: 'scale(0.5)', sm: 'scale(0.6)', md: 'scale(1)' },
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    bgcolor: '#8e68116b',
  },
}
