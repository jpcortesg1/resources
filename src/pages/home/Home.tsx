import { useNavigate } from "react-router-dom";
import "./home.css";
import { HomeData, homeData } from "./homeData";

interface CardProps {
  content: HomeData;
}

const Card = ({ content }: CardProps) => {
  const navigate = useNavigate();

  const navigation = (path: string) => {
    navigate(path);
  };
  return (
    <div className="homeCard">
      <h3 className="homeCardTitle">Cards</h3>
      <p className="homeCardDescription">Card Related Content</p>
      <button className="homeCardButton" onClick={() => navigation("/cards")}>
        See all cards
      </button>
    </div>
  );
};

export default function Home() {
  return (
    <div className="home">
      <h1 className="homeTitle">Resources</h1>

      <div className="homeContainer">
        {homeData.map((data) => (
          <Card content={data} />
        ))}
      </div>
    </div>
  );
}
