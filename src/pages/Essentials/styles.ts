import { styled } from "styled-components";

export const ContainerEssentials = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme["gray-200"]};
  width: 384px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 32px 32px 32px;
  flex-direction: column;
  gap: 10px;

  &:hover {
    border-color: ${(props) => props.theme["purple-100"]};
  }

  p {
    color: ${(props) => props.theme["purple-200"]};
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${(props) => props.theme["gray-900"]};
  }

  h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${(props) => props.theme["gray-900"]};
  }

  hr {
    width: 20rem;
    border: 1px solid ${(props) => props.theme["gray-200"]};
    margin: 2rem 0;
  }

  @media screen and (max-width: 600px) {
    width: 320px;

    hr {
      width: 100%;
    }
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 3.063rem;

  @media screen and (max-width: 600px) {
    gap: 2.063rem;
  }
`;

export const ButtonPrice = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  a {
    border: 1px solid ${(props) => props.theme["gray-800"]};
    width: 20rem;
    height: 3.5rem;

    cursor: pointer;
    padding: 16px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    font-size: 1rem;
    font-weight: 700;
    color: ${(props) => props.theme["gray-800"]};
  }

  @media screen and (max-width: 600px) {
    a {width: 100%;}
  }
`;

export const ItemPlans = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: auto;
      margin-left: 0.5rem;
    }
  }
`; 