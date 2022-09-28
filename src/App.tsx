import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar01 from "./components/bars/topBar01/TopBar01";
import Card from "./pages/card/Card";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopBar01 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Card />} />
          <Route path="/cards/:id" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
