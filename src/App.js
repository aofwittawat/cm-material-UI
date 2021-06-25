import React from 'react'
import { Button, Container } from '@material-ui/core';
import { pink, green, red } from '@material-ui/core/colors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const App = () => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        500: "#FF0"
      },
      secondary:{
        A400: "#0F0"
      }
    },
    status: {
      danger: "orange"
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" >
        <Button variant="contained" style={{ background: pink[100] }}>Run</Button>
        <Button variant="contained" style={{ background: green[100], color: "#000" }}>Run</Button>
        <Button variant="contained" color="primary">Run</Button>
        <Button variant="contained" color="secondary">Run</Button>
      </Container>
    </ThemeProvider>
  )
}

export default App
