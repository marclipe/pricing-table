import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  gap: 25rem;

  @media screen and (max-width: 768px) {
    gap: 2rem;
    flex-direction: column;
  }
`
export const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 3rem;

  color: ${(props) => props.theme["gray-300"]};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme["purple-100"]};
    color: ${(props) => props.theme.white};
    width: 100px;
    height: 30px;
    border-radius: 4px;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 320px) {
    gap: 0.625rem;
    margin-bottom: 2rem;
    flex-direction: column;
  }
`;

