import "./App.css";
import { Header } from "./componentes/Header/Header.jsx";
import { Main } from "./componentes/Main/Main.jsx";
import { Footer } from "./componentes/Footer/Footer.jsx";

export default function App() {
  return (
    <div className="bodyContainer">
      <Header className="headerContainer" />
      <Main className="mainContainer" />
      <Footer className="footerContainer" />
    </div>
  );
}
