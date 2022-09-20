import { Box } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import Rightbar from './components/Rightbar';
import Feed from './components/Feed';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Box>
    <Navbar/>
      <Stack direction="row" spacing={2}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  )
}

export default App