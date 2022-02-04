import React from 'react'
import { Paper, Grid, Typography, Box } from '@mui/material'
import { AccessTime } from '@mui/icons-material'
import BackImage from '../n1.jpg'

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img src={BackImage} className="img" alt="" />
        <Box paddingX={1}>
          <Typography component="h2" variant="subtitle1">Immerse into the Falls</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }} 
          >  
            <Typography variant="p" component="body2">
              5 hours
            </Typography>
            <AccessTime />
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default TourCard
