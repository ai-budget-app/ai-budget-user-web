import { Toolbar, IconButton, Button, useMediaQuery } from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '@/shared/context/ThemeContext';
import { NavLink } from '@/shared/ui/NavLink';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {
  HeaderContainer,
  Logo,
  LogoImg,
  LogoText,
  Nav,
  DividerStyled,
  Actions,
} from './styles';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMdUp = useMediaQuery(muiTheme.breakpoints.up('md'));

  return (
    <HeaderContainer elevation={3}>
      <Toolbar disableGutters style={{ minHeight: 'unset', paddingLeft: 16, paddingRight: 16 }}>
        <Logo>
          <LogoImg src="/favicon-192x192.png" alt="Zenny" />
          <LogoText style={{ display: isMdUp ? 'inline' : 'none' }}>Zenny</LogoText>
        </Logo>

        {isMdUp && (
          <Nav>
            <NavLink href="#features">Возможности</NavLink>
            <NavLink href="#about">О нас</NavLink>
          </Nav>
        )}

        {isMdUp && <DividerStyled />}

        <Actions>
          <IconButton onClick={toggleTheme} size="large">
            {isDark ? <WbSunnyIcon /> : <DarkModeIcon />}
          </IconButton>
          <Button variant="contained" color="primary" size="small" sx={{ borderRadius: '999px' }}>
            Начать
          </Button>
        </Actions>
      </Toolbar>
    </HeaderContainer>
  );
};