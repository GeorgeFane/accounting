import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { GitHub, Home, Search } from '@mui/icons-material';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}

                        href='http://georgefane.github.io/'
                    >
                        <Home />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Accounting
                    </Typography>

                    <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        Generate T-accounts, balance sheet, and income statement from journal entries
                    </Typography>

                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}

                        href='https://github.com/GeorgeFane/accounting'
                        target='_blank'
                    >
                        <GitHub />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
