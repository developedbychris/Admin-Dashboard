import React from 'react'
import { Box, useTheme } from '@mui/material'
import { tokens } from '../theme'

const ProgressCircle = ({progress = "0.75", size = "40"}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    1
  return (
    <div>ProgressCircle</div>
  )
}

export default ProgressCircle