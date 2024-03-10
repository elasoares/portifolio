/* import { SideNav } from "./SideNav.jsx"; */
import { useState } from "react";
import styles from "./Header.module.css";
import { PiTextAlignLeftLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Botao } from "../Botao/Botao";

export function Header() {
  const [nav, setNav] = useState(false);

  function sideNavFunctionClick() {
    setNav(!nav);
  }

  const links = [
    { name: "Home", link: "#home" },
    { name: "Sobre", link: "#sobre" },
    { name: "Habilidades", link: "#habilidades" },
    { name: "Experiências", link: "#experiencas" },
    { name: "contato", link: "#conato" },
    { icon: <FaLinkedinIn />, link: "www.linkedin.com/in/ela-284860153" },
    { icon: <FaGithub />, link: "https://github.com/elasoares" },
    { icon: <FaInstagram />, link: "#" },
  ];

  return (
    <>
      <header className={styles["conatiner-header"]}>
        <a href="#" className={styles.logo}>
          {" "}
          Ela{" "}
        </a>

        <ul
          className={`${styles["container-item"]} ${
            nav ? styles.mostrarNav : ""
          }`}
        >
          {links.map((navegation, index) => (
            <li key={index}>
              <a className={styles["item-menu"]} href={navegation?.link}>
                {navegation?.name}
              </a>
            </li>
          ))}
          <div className={styles["container-icon"]}>
            {links.map((icons, index) => (
              <li className={styles["item-icon"]} key={index}>
                <a className={styles["icon-item-link"]} href={icons.link}>
                  {icons.icon}
                </a>
              </li>
            ))}
          </div>
        </ul>
        <Botao className={styles["botao-contato"]}>contate-me</Botao>
        <PiTextAlignLeftLight
          className={`${nav ? styles["humburger-animation"] : ""} ${
            styles.humburger
          }`}
          onClick={sideNavFunctionClick}
        />
      </header>
    </>
  );
}
