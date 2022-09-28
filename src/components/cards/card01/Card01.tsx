import "./card01.css";

interface CardArticleProps {
  content: {
    title: string;
    description: string;
    image: string;
  };
}

const CardArticle = ({ content }: CardArticleProps) => {
  const { title, description, image } = content;
  return (
    <article className="card01__article">
      <div className="card01_data">
        <img src={image} alt="card image 1" className="card01__image" />

        <h1 className="card01_title">{title}</h1>
        <p className="card01__description">{description}</p>
      </div>

      <div className="card01__shapes">
        <span className="card01__shape"></span>
        <span className="card01__shape"></span>
        <span className="card01__shape"></span>
        <span className="card01__shape"></span>
        <span className="card01__shape"></span>
        <span className="card01__shape"></span>
        <span className="card01__shape"></span>
        <span className="card01__shape"></span>
      </div>
    </article>
  );
};

export default function Card01() {
  return (
    <div className="card01">
      <div className="card01__container">
        <CardArticle
          content={{
            image: "/card01/img1.png",
            title: "Shield & Shining Star",
            description: "Beautiful card, with hover effects",
          }}
        />
        <CardArticle
          content={{
            image: "/card01/img2.png",
            title: "Fire Light Sword",
            description: "Beautiful card, with hover effects",
          }}
        />
        <CardArticle
          content={{
            image: "/card01/img3.png",
            title: "Incoming Messages",
            description: "Beautiful card, with hover effects",
          }}
        />
      </div>
    </div>
  );
}
