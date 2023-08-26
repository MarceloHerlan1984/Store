import { Container, Divider, Paper, Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom'

function ServerError() {
const {state}=useLocation()

  return (
    <Container component={Paper}>
        {state?.error ? (
            <>
                <Typography variant='h3' gutterBottom color='secondary'>{state.error.title}</Typography>
                <Divider/>
                <Typography variant='body1' gutterBottom >{state.error.detail || 'Internal server error'}</Typography>
            </>
        ):
        (
            <Typography variant='h5' gutterBottom>Server error</Typography>
        )
        }
        
    </Container>
  )
}

export default ServerError