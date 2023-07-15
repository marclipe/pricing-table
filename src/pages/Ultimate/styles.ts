import { styled } from "styled-components";

export const ContainerUltimate = styled.section`
  background-color: ${(props) => props.theme["gray-900"]};
  width: 24rem;
  padding: 3rem 2rem 2rem 2rem;
  margin: 0 auto;
  align-items: flex-start;
  gap: 0.625rem;
  display: flex;
  flex-direction: column;
`;

export const TitleConteiner = styled.div``;

export const Advantage = styled.div`
  background-color: ${(props) => props.theme.orange};
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.72px;
  text-transform: uppercase;
`; 