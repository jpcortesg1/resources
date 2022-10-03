import { useNavigate } from "react-router-dom";
import { AiOutlineYoutube, AiOutlineEye } from "react-icons/ai";
import "./card.css";
import { CardData } from "../../../interfaces/card/Card";

interface CardComponentProps {
  card: CardData;
  baseLink: string;
}

export default function Card({ card, baseLink }: CardComponentProps) {
  const { id, title, description, youtube } = card;
  const navigate = useNavigate();

  const navigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className="card_card" key={card.id}>
      <h2 className="card__card__title">{title}</h2>
      <p className="card__card__description">{description}</p>
      <div className="card_buttons">
        <button
          className="card_card_button"
          onClick={() => navigation(`/${baseLink}/${id}`)}
        >
          See
          <span className="card__card__button__icon">
            <AiOutlineEye />
          </span>
        </button>
        {youtube && (
          <a
            className="card_card_button card_card_button__youtube"
            href={youtube.link}
          >
            {youtube.chanel}
            <span className="card__card__button__icon">
              <AiOutlineYoutube />
            </span>
          </a>
        )}
      </div>
    </div>
  );
}
