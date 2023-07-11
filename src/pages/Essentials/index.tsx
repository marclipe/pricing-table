import { ContainerEssentials, Price } from "./styles";

export function Essentials() {
  return (
    <ContainerEssentials>
      <section>
        <p>Para você começar</p>
        <Price>
          <h3>Essentials </h3>
          <h3>R$ 19,97/mês</h3>
        </Price>
        <div>
          <a href="">Assinar agora</a>
        </div>
        <hr />
        <div>
          <span>Até 3 usuários</span>
          <span>Autoatendimento</span>
        </div>
      </section>
    </ContainerEssentials>
  );
}