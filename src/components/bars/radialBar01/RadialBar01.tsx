import { useRef, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { colors, items } from "./dataRadialBar01";
import "./styles.css";

export default function RadialBar01() {
  const toggle = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLUListElement>(null);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const toggleMenu = () => {
    menu.current?.classList.toggle("active");
    setIsActiveMenu((current) => !current);
  };

  const transformItem = (index: number): string =>
    isActiveMenu
      ? `rotate(${(360 / 8) * index}deg) translate(0px)`
      : "rotate(0deg) translate(110px)";

  const transformIcon = (index: number): string =>
    isActiveMenu ? `rotate(${(360 / -8) * index}deg) ` : "rotate(0deg)";

  return (
    <div className="radialBar01">
      <ul className="radialBar01__menu" ref={menu}>
        <div className="radialBar01__toggle" ref={toggle} onClick={toggleMenu}>
          <IoAddOutline />
        </div>
        {items.map((item, index) => {
          const { icon } = item;
          return (
            <li
              className="radialBar01__menu__item"
              key={index}
              style={
                {
                  transform: transformItem(index + 1),
                  transitionDelay: `${index * 0.1}s`,
                  "--clr": colors[index],
                } as React.CSSProperties
              }
            >
              <a
                style={{
                  color: colors[index],
                  transform: transformIcon(index + 1),
                }}
                className="radialBar01__menu__item__link"
                href="#"
              >
                {icon}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
