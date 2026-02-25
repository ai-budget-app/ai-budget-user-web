import { IconButton, useMediaQuery } from '@mui/material';
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '@/shared/context/ThemeContext';
import { ButtonOutlined } from '@/shared/ui/button';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {
  HeaderContainer,
  HeaderToolbar,
  Logo,
  LogoImg,
  LogoText,
  NavCentered,
  ActionsFull,
  NavLinkStyled,
} from './styles';

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const muiTheme = useMuiTheme();
  const isMdUp = useMediaQuery(muiTheme.breakpoints.up('md'));

  return (
    <HeaderContainer elevation={0}>
      <HeaderToolbar disableGutters>
        <Logo>
          <LogoImg src="/favicon-192x192.png" alt="Zenny" />
          <LogoText style={{ display: isMdUp ? 'inline' : 'none' }}>Zenny</LogoText>
        </Logo>

        {isMdUp && (
          <NavCentered>
            <NavLinkStyled href="#features">
              Возможности
            </NavLinkStyled>

            <NavLinkStyled href="#about">
              О нас
            </NavLinkStyled>

            <NavLinkStyled href="#faq">
              FAQ
            </NavLinkStyled>
          </NavCentered>
        )}

        <ActionsFull>
          <IconButton onClick={toggleTheme} size="large" sx={{ color: '#ffffff' }}>
            {isDark ? <WbSunnyIcon /> : <DarkModeIcon />}
          </IconButton>
          <ButtonOutlined size="small" href="#start">
            Начать
          </ButtonOutlined>
        </ActionsFull>
      </HeaderToolbar>
    </HeaderContainer>
  );
};
