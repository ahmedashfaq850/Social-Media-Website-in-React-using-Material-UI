import styled from "@emotion/styled";
import { Box, AppBar, Toolbar, Typography, Badge, Avatar, Menu, MenuItem } from "@mui/material";
import React from "react";
import PublicIcon from "@mui/icons-material/Public";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { InputBase } from "@mui/material";
import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignContent: 'center'
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius: "5px",
    width: "40%",
  }));

  const Icons = styled("div")(({ theme }) => ({
    display: 'flex',
    gap:"20px",
    alignItems: 'center',
    cursor: 'pointer',
  }));

  return (
    <Box>
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography
            varient="h6"
            sx={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            <PublicIcon />
            Social
          </Typography>
          <Search>
            <InputBase sx={{width: '100%', display: { xs: "none", sm: "block" }}} type='search' placeholder="Search ..." />
          </Search>
          <Icons>
            <Badge badgeContent={4} color="error">
              <MailIcon/>
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon/>
            </Badge>
            <Avatar onClick={(e)=>{setOpen(true)}} sx={{width: "30px" , height:"30px"}} alt="Remy Sharp" src="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          </Icons>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
          
        </StyledToolBar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
