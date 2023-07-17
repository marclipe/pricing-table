import { styled } from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-width: 18.75rem;
  /* height: calc(100vh - 10rem); */
  margin: 5rem auto;
  padding: 1.5rem;

  background-color: ${(props) => props.theme.white};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    height: auto;
    margin: auto;
  }
`;