import styles from "./HeaderNoMain.module.css";
import { GoDownload } from "react-icons/go";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Foto } from "../../Foto/Foto";
import { Card } from "../../Card/Card";
import curriculo from "../../Imagens/curriculo.pdf";

const iconLinks = [
  { icon: <FaLinkedinIn />, link: "www.linkedin.com/in/ela-284860153" },
  { icon: <FaGithub />, link: "https://github.com/elasoares" },
  { icon: <FaInstagram />, link: "#" },
];

const whatsapp = "https://wa.me/85992641415";

export function HeaderNoMain() {
  return (
    <div className={`${styles["container-main"]} fadeIn`}>
      <Card className={styles["container-icon-lista"]}>
        <div className={styles.icon}>
          <ul className={styles.icon}>
            {iconLinks.map((icons, index) => (
              <li key={index}>
                <a className={styles["item-icon"]} href={icons.link}>
                  {icons.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["container-info"]}>
          <h2 className={styles.titulo}>
            <span className={styles.typingAnimation}>
              {" "}
              Elaine Soares Almeida
            </span>
          </h2>
          <h3 className={styles.subtitulo}>DESENVOLVEDORA FRONT-END</h3>
          <div className={styles["container-botao"]}>
            <a href={whatsapp} className={`${styles["botao-contato"]}`}>
              CONTATE-ME
            </a>
            <a href={curriculo} download="curriculo" className={styles.botao}>
              <span className={styles["icon-download"]}>
                <GoDownload />
              </span>{" "}
              CURRÍCULO
            </a>
          </div>
        </div>
        <Foto
          src="src/componentes/Imagens/WhatsApp Image 2024-01-22 at 00.05.18(1).png"
          className={styles.foto}
        />
      </Card>
    </div>
  );
}
