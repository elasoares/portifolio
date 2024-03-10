import React from "react";
import styles from "./Main.module.css";
import { HeaderNoMain } from "./HeaderNoMain/HeaderNoMain";
import { Sobre } from "./Sobre/Sobre";
import { Experiencia } from "./Experiencia/Experiencia";

export function Main() {
  return (
    <div className={styles["container-main"]}>
      <HeaderNoMain className={styles["area-meus-dados"]} />
      <Sobre />
      {/*      <Experiencia /> */}
    </div>
  );
}
