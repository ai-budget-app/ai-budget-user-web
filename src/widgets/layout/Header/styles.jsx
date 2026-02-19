import styled from 'styled-components';
import { AppBar } from '@mui/material';

export const HeaderContainer = styled(AppBar)`
  && {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    background: ${({ theme }) => theme.palette.background.paper};
    border-radius: 16px;
    width: auto;
    backdrop-filter: blur(16px);
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 8px;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const LogoText = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
`;

export const DividerStyled = styled.div`
  width: 1px;
  height: 24px;
  background: #e0e0e0;
  margin: 0 8px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;