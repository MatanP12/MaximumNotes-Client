import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import Home from "./pages/Home";
import MenuIcon from '@mui/icons-material/Menu';

function TopBar(){
  return (
    <AppBar position="sticky" sx={{mb:3}}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
        Notes
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

}


function App() {
  return (
    <Box>
      <TopBar/>
      <Box>
        <Home/>
      </Box>
    </Box>
  );
}

export default App;
