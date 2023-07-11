import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  gap: 5rem;
  justify-content: space-between;
`
export const NavLinks = styled.nav`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 3rem;

  color: ${(props) => props.theme.orange};
`;

