import { styled } from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  gap: 2rem;
  padding-top: 2rem;
  justify-content: center;
  img {
    width: 400px;
    border-radius: 8px;
  }
   
  h1 {
    font-weight: 700;
    color: ${props => props.theme["gray-800"]}; 
    font-size: 2rem;
  }

  p {
    text-align: justify;
    padding-right: 2rem;
    font-weight: 400;
    padding-bottom: 1rem;
    font-size: 1rem;
    color: ${props => props.theme["gray-600"]};
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;

    img {
      width: 100%;
    }

    p {
      padding-right: 0;
    }
  }
`;