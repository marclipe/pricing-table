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

  hr {
    width: 320px;
    border: 1px solid ${(props) => props.theme["gray-200"]};
    margin: 2rem 0;
  }
`;

export const Price = styled.div`
  display: flex;
  gap: 3.063rem;
`;