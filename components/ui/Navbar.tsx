import { useContext } from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from '../../context/ui';

export const Navbar = () => {

  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position='sticky'>
        <Toolbar>
            <IconButton
                edge='start'
                onClick={ openSideMenu }
                size='large'
            >
                <MenuOutlinedIcon />
            </IconButton>
            <Typography variant='h6'>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
