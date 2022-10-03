import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { items } from "./data";
import { ItemProps } from "./interfaces";
import "./styles.css";
import { useRef, useState } from "react";

const Item = ({ item }: ItemProps) => {
  const { name } = item;
  return (
    <li className="topbar02__item">
      <a href="#" className="topbar02__link">
        {name}
      </a>
    </li>
  );
};

export default function TopBar02() {
  const searchBtn = useRef(null);
  const closeBtn = useRef(null);
  const searchBox = useRef<HTMLDivElement>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching((current) => !current);
    searchBox.current?.classList.toggle("active");
  };

  const seeIcon = () => {
    if (isSearching) {
      return (
        <>
          <span ref={searchBtn} onClick={handleSearch}>
            <FiSearch />
          </span>
          <span ref={closeBtn} onClick={handleSearch}>
            <AiOutlineClose />
          </span>
        </>
      );
    } else {
      return (
        <span ref={searchBtn} onClick={handleSearch}>
          <FiSearch />
        </span>
      );
    }
  };

  return (
    <div className="topbar02">
      <header className="topbar02__header">
        <a href="#" className="topbar02__logo">
          Logo
        </a>
        <div className="topbar02__group">
          <ul className="topbar02__navigation">
            {items.map((item) => {
              const { id } = item;
              return <Item key={id} item={item} />;
            })}
          </ul>
          <div className="topbar02__search">
            <span className="topbar02__icon">{seeIcon()}</span>
          </div>
          <div className="topbar02__search__box" ref={searchBox}>
            <input
              type="text"
              placeholder="Search here  . . ."
              className="topbar02__input"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
