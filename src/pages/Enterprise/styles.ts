import { styled } from "styled-components";

export const ContainerEnterprise = styled.div`
  width: 384px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex;
  padding: 3rem 2rem 2rem 2rem;

  border-radius: 10px;
  border: 1px solid ${props => props.theme["gray-200"]};

  hr {  
    border: 1px solid ${props => props.theme["gray-200"]};
    margin: 2rem 0;
  }

  &:hover {
    border-color: ${props => props.theme["purple-100"]};
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  p {
    color: ${(props) => props.theme["purple-100"]};
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    padding-bottom: 0.5rem;
  }

  h3 {
    color: ${(props) => props.theme["gray-800"]};
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 2rem;
  }
`;

export const ContainerButton = styled.button`
  width: 20rem;
  height: 3.5rem;
  background-color: ${(props) => props.theme.white};

  cursor: pointer;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 1rem;
  font-weight: 700;
  color: ${props => props.theme["gray-800"]};

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["gray-800"]};

  @media screen and (max-width: 480px) {
    width: 272px;
  }

  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;


export const ItemPlans = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  .itemOfPlan {
    display: flex;
    align-items: center;
  } 
  
  span {
    margin-left: 0.5rem;
  }
`;