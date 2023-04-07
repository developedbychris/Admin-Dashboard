import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import PieChart from '../../components/PieChart'
import useDocumentTitle from '../../hooks/useDocumentTitle'

const Pie = () => {
  useDocumentTitle('Pie Chart')
  return (
    <Box m="20px">
        <Header title="Pie Chart" subtitle="Simple Pie Chart"/>

        <Box height="75vh">
            <PieChart/>
        </Box>
    </Box>
  )
}

export default Pie