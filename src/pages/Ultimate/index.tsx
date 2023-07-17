import { CheckFat, WarningCircle } from "@phosphor-icons/react";
import { ContainerUltimate, TitleContainer, Advantage, ContainerButton, ItemPlans } from "./styles";

export const Ultimate = () => {
  return (
    <ContainerUltimate>
      <Advantage>Mais vantajoso</Advantage>
      <TitleContainer>
        <p>Para você decolar</p>
        <div>
          <h2>Ultimate</h2>
          <h3>R$ 29,97/mês</h3>
        </div>
      </TitleContainer>
      <ContainerButton>
        <button>Assinar agora</button>
      </ContainerButton>
      <hr />
      <ItemPlans>
        <div className="containerPlans">
          <div>
            <CheckFat color="#1B873F" size={20} weight="duotone" />
            <span>Usuários ilimitados</span>
          </div>
          <div className="warningCircle">
            <WarningCircle color="#475569" size={20} />
          </div>
        </div>
        <div className="containerPlans">
          <div>
            <CheckFat color="#1B873F" size={20} weight="duotone" />
            <span>Suporte 24/7</span>
          </div>
          <div className="warningCircle">
            <WarningCircle color="#475569" size={20} />
          </div>
        </div>
        <div className="containerPlans">
          <div>
            <CheckFat color="#1B873F" size={20} weight="duotone" />
            <span>CSM Dedicado</span>
          </div>
          <div className="warningCircle">
            <WarningCircle color="#475569" size={20} />
          </div>
        </div>
        <div className="containerPlans">
          <div>
            <CheckFat color="#1B873F" size={20} weight="duotone" />
            <span>Treinamentos</span>
          </div>
          <div className="warningCircle">
            <WarningCircle color="#475569" size={20} />
          </div>
        </div>
      </ItemPlans>
    </ContainerUltimate>
  );
}