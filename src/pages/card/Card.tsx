import CardComponent from "../../components/cards/card/Card";
import { useLocation } from "react-router-dom";
import { cardData } from "./dataCard";
import "./card.css";

export default function Card() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const component = cardData.find((item) => item.id === parseInt(id))?.content;

  if (component) return component;

  return (
    <div className="card">
      <h1 className="card__title">Cards</h1>

      <div className="card_cards">
        {cardData.map((card, index) => (
          <CardComponent key={index} card={card} baseLink="cards" />
        ))}
      </div>
    </div>
  );
}
