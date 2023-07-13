import { ContainerEssentials, Price, ButtonPrice } from "./styles"

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
        <div>
          <span>Até 3 usuários</span>
          <span>Autoatendimento</span>
        </div>
      </section>
    </ContainerEssentials>
  );
}