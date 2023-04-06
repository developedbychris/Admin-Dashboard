import React from "react"
import { Box, Typography, useTheme } from "@mui/material"
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../theme"
import Header from "../../components/Header"

const FAQ = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
            An Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dolores illo reiciendis sint 
                optio dolor blanditiis nostrum tempora nihil similique deleniti quis facere quae laudantium nobis, amet magnam id minus.
            </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
            Another Important Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dolores illo reiciendis sint 
                optio dolor blanditiis nostrum tempora nihil similique deleniti quis facere quae laudantium nobis, amet magnam id minus.
            </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
            Your Favorite Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dolores illo reiciendis sint 
                optio dolor blanditiis nostrum tempora nihil similique deleniti quis facere quae laudantium nobis, amet magnam id minus.
            </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
            Some Random Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dolores illo reiciendis sint 
                optio dolor blanditiis nostrum tempora nihil similique deleniti quis facere quae laudantium nobis, amet magnam id minus.
            </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
            <Typography variant="h5" color={colors.greenAccent[500]}>
            The Final Question
            </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio dolores illo reiciendis sint 
                optio dolor blanditiis nostrum tempora nihil similique deleniti quis facere quae laudantium nobis, amet magnam id minus.
            </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}

export default FAQ
