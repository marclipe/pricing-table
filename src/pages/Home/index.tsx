import { HomeContainer } from "./styles";
import tableHands from '../../assets/img/aerial-view-business-team.jpg'

export function Home(){
  return (
    <HomeContainer>
      <div>
        <h1>Olá, Amigo</h1>
        <p>Selecione um plano para começar!</p>
        <img src={tableHands} alt="" />
      </div>
      <div>
        <p>
          Acreditamos que a estratégia e o empreendedorismo são as bases para o
          crescimento e o sucesso duradouro nos negócios. Sabemos que o ambiente
          empresarial é competitivo e em constante evolução, e é por isso que
          valorizamos a importância de uma abordagem estratégica e do espírito
          empreendedor para impulsionar nosso crescimento. A estratégia é o
          alicerce de todas as grandes conquistas empresariais. Ela envolve
          definir metas claras, identificar oportunidades, compreender o mercado
          e desenvolver um plano de ação sólido para alcançar resultados
          excepcionais. Na [nome da sua empresa], nossa equipe é especializada
          em desenvolver estratégias personalizadas, adaptadas às necessidades e
          objetivos exclusivos do seu negócio. Queremos ajudar você a navegar
          pelas complexidades do mercado, aproveitar as tendências emergentes e
          superar seus concorrentes.
        </p>
      </div>
    </HomeContainer>
  );
}