import styles from "./TabelaInfomacoes.module.css";
import React from "react";
export function TabelaInformacoes({ dados }) {
  return (
    <>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado, index) => (
            <tr key={index}>
              <td>{dado.nome}</td>
              <td>{dado.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className={styles.tabela}>
        <thead>
          <tr>
            <th>Celular</th>
            <th>Localidade</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((dado, index) => (
            <tr key={index}>
              <td>{dado.celular}</td>
              <td>{dado.localidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
