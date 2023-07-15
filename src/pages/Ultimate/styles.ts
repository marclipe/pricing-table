import { styled } from "styled-components";

export const ContainerUltimate = styled.section`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 24rem;
  padding: 0 2rem 2rem 2rem;
  margin: 0 auto;
  align-items: flex-start;
  gap: 0.625rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  hr {
    width: 20rem;
    border: 1px solid ${props => props.theme["gray-700"]};
    margin: 2rem 0;
  }
`;

export const TitleConteiner = styled.div`
  p {
    color: ${(props) => props.theme["purple-100"]};
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }

  div {
    display: flex;
    gap: 3.063rem;
    h3 {
      color: ${(props) => props.theme["gray-50"]};
    }
  }
`;

export const Advantage = styled.div`
  background-color: ${(props) => props.theme.orange};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  transform: translate(0, -1rem);
  margin: 0 auto;
`; 

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0 0;

  button {
    border: none;
    width: 20rem;
    height: 3.5rem;
    cursor: pointer;

    display: flex;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 4px;

    background-color: ${(props) => props.theme["purple-100"]};
    color: ${(props) => props.theme.white};
    font-weight: 700;
  }
`;

export const ItemPlans = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 1rem; */

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      margin-left: 0.5rem;
      color: ${(props) => props.theme.white};
    }
  }

  .containerPlans {
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    align-items: center;
    flex-direction: row;
  }
`; 