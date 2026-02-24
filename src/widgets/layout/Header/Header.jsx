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
            <NavLinkStyled
              onClick={() =>
                document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Возможности
            </NavLinkStyled>
            <NavLinkStyled
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              О нас
            </NavLinkStyled>
            <NavLinkStyled
              onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            >
              FAQ
            </NavLinkStyled>
          </NavCentered>
        )}

        <ActionsFull>
          <IconButton onClick={toggleTheme} size="large" sx={{ color: '#ffffff' }}>
            {isDark ? <WbSunnyIcon /> : <DarkModeIcon />}
          </IconButton>
          <ButtonOutlined
            size="small"
            onClick={() => document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Начать
          </ButtonOutlined>
        </ActionsFull>
      </HeaderToolbar>
    </HeaderContainer>
  );
};
