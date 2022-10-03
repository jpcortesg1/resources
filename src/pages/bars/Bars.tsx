import CardComponent from "../../components/cards/card/Card";
import { useLocation } from "react-router-dom";
import { dataBars } from "./dataBars";
import "./bars.css";

export default function Bars() {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  const component = dataBars.find((item) => item.id === parseInt(id))?.content;

  if (component) return component;

  return (
    <div className="card">
      <h1 className="card__title">Cards</h1>

      <div className="card_cards">
        {dataBars.map((card, index) => (
          <CardComponent key={index} baseLink="bars" card={card} />
        ))}
      </div>
    </div>
  );
}
