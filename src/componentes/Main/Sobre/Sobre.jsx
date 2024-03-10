import styles from "./Sobre.module.css";
import { Foto } from "../../Foto/Foto";
import { TabelaInformacoes } from "../TabelaInfomacoes/TabelaInfomacoes";

export function Sobre({ className }) {
  const dados = [
    {
      nome: "Elaine Soares Almeida",
      email: "elaine.almeida@al.infnet.edu.br",
      celular: 85992641415,
      localidade: "Fortaleza - CE",
    },
  ];

  return (
    <section className={`${className} ${styles.container}`}>
      <div className={styles.containerTitulo}>
        <Foto
          className={styles.foto}
          src="src/componentes/Main/HeaderNoMain/WhatsApp Image 2024-01-22 at 00.05.18(1).png"
          alt="Minha Foto"
        />
        <div>
          <div className={styles.containerTitulo}>
            <h1>Sobre mim</h1>
            <h2 className={styles.titulo}>Olá!</h2>
            <span className={styles.tracoDoTitulo}> </span>
          </div>
          <h4>Eu sou programadora front-end</h4>
          <p className={styles.paragrafo}>
            Sou graduanda em Análise e Desenvolvimento de Sistemas
            desenvolvimento estudando no momento front-end. Estou sempre
            procurando novos desafios e estou pronta para me engajar em projetos
            que me permitem crescer profissionalmente.
          </p>
        </div>
      </div>

      {/*  <TabelaInformacoes dados={dados} /> */}
    </section>
  );
}
