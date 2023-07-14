import { HomeContainer } from "./styles";
import tableHands from '../../assets/img/aerial-view-business-team.jpg'

const cardProps = [
  {
    id: 1,
    title: "Melhores preço",
    photo: tableHands,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit mollitia possimus odit, magnam deserunt quisquam dicta saepe omnis in hic quos alias modi, qui distinctio, vero excepturi optio voluptas tenetur.",
  },
  {
    id: 2,
    title: "Melhores preço",
    photo: tableHands,
    text: "Beleza",
  },
];

export function Home(){
  return (
  <HomeContainer>
    <h1>Olá</h1>
    <p>Selecione um plano para começar!</p>
    <div>
      {/* {
        cardProps.map((card) => () => (
          <div key={card.id}>
            <h2>{card.title}</h2>
            <img src={card.photo} alt={card.title} />
            <p>{card.text}</p>
          </div>
        ))
      } */}
    </div>
  </HomeContainer>
  )
}