import { CheckFat, WarningCircle } from "@phosphor-icons/react";
import { ContainerEnterprise, TitleContainer, ContainerButton, ItemPlans } from "./styles"

export const Enterprise = () => {
  return (
    <ContainerEnterprise>
      <TitleContainer>
        <p>Para sua empresa</p>
        <h3>Enterprise</h3>
      </TitleContainer>
      <ContainerButton>Fale com a gente</ContainerButton>
      <hr />
      <ItemPlans>
        <div className="itemOfPlan">
          <CheckFat color="#1B873F" size={20} weight="duotone" />
          <span>
            Plano customizado para o seu negocio
          </span>
        </div>
        <div>
          <WarningCircle color="#475569" size={20} />
        </div>
      </ItemPlans>
    </ContainerEnterprise>
  );
}