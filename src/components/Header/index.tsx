import { useState } from 'react';
import { IconButton, Menu, MenuItem, Button, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import * as S from './styles'



const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: 'Usuários', path: '/' },
    { text: 'Cadastrar Usuário', path: '/create' },
  ];

  return (
    <S.StyledAppBar position="static">
      <S.StyledToolbar>
        <S.StyledLink to="/">
          <Button color="inherit">Meu App</Button>
        </S.StyledLink>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.text} onClick={handleClose}>
                  <S.StyledLink to={item.path}>{item.text}</S.StyledLink>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <S.DesktopMenu>
            {menuItems.map((item) => (
              <S.StyledLink key={item.text} to={item.path}>
                <Button color="inherit">{item.text}</Button>
              </S.StyledLink>
            ))}
          </S.DesktopMenu>
        )}
      </S.StyledToolbar>
    </S.StyledAppBar>
  );
};

export default Header;