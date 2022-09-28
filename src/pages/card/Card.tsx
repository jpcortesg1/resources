import { useLocation } from "react-router-dom";
import "./card.css";
import { cardData } from "./dataCard";
import CardComponent from "../../components/cards/card/Card";

export default function Card() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const component = cardData.find((item) => item.id === parseInt(id))?.content;

  if (component) return component;

  return (
    <div className="card">
      <h1 className="card__title">Cards</h1>

      <div className="card_cards">
        {cardData.map((card) => (
          <CardComponent card={card} />
        ))}
      </div>
    </div>
  );
}
