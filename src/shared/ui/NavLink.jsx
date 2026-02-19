import styled from 'styled-components';

const NavLinkStyled = styled.a`
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.875rem;
  color: #888;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #222;
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const NavLink = ({ href, children, ...props }) => {
  return (
    <NavLinkStyled href={href} {...props}>
      {children}
    </NavLinkStyled>
  );
};