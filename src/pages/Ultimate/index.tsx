import { ContainerUltimate, TitleConteiner, Advantage } from "./styles";

export const Ultimate = () => {
  return (
    <ContainerUltimate>
      <Advantage>Mais vantajoso</Advantage>
      <TitleConteiner>
        <p>Para você decolar</p>
        <div>
          <h3>Ultimate</h3>
          <h3>R$ 29,97/mês</h3>
        </div>
      </TitleConteiner>
      <a href="#">Assinar agora</a>
      <div>
        <span>Usuários ilimitados</span>
        <span>Suporte 24/7</span>
        <span>CSM Dedicado</span>
        <span>Treinamentos</span>
      </div>
    </ContainerUltimate>
  );
}