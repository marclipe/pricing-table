import { CheckFat, WarningCircle } from "@phosphor-icons/react";
import { ContainerEssentials, Price, ButtonPrice, ItemPlans } from "./styles"

export function Essentials() {
  return (
    <ContainerEssentials>
      <section>
        <p>Para você começar</p>
        <Price>
          <h2>Essentials </h2>
          <h3>R$ 19,97/mês</h3>
        </Price>
        <ButtonPrice>
          <a href="#">Assinar agora</a>
        </ButtonPrice>
        <hr />
        <ItemPlans>
          <div>
              <CheckFat color="#1B873F" size={20} weight="duotone" />
              <span>Até 3 usuários</span>
              <WarningCircle color="#475569" size={20} />
          </div>
          <div>
            <CheckFat color="#1B873F" size={20} weight="duotone" />
            <span>Autoatendimento</span>
            <WarningCircle color="#475569" size={20} />
          </div>
        </ItemPlans>
      </section>
    </ContainerEssentials>
  );
}