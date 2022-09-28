import { useNavigate } from "react-router-dom";
import "./topbar01.css";

export default function TopBar01() {
  const navigate = useNavigate();

  const navigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="topbar01">
      <div className="topbar01Left">
        <a className="topbar01LeftLogo" onClick={() => navigation("/")}>
          <img src="/vite.svg" alt="" />
          <span className="topbar01Text">Home</span>
        </a>
      </div>
    </nav>
  );
}
