import styles from "./Experiencia.module.css";

export function Experiencia() {
  return (
    <section className={` ${styles.container}`}>
      <h2 className={styles.titulo}>experiência profissional</h2>
      <div className={styles.experiencia}>
        <h4 > Atendente(receptivo) </h4>
        <p>Vector Contact Center - 09/04/2018 à 17/07/2020</p>
        <p>
          Atendimento receptivo e ativo; Correção de dados; Abertura de
          solicitação de adesão ao plano; Inscrição de novo beneficiário;
          Cancelamento ao plano; Esclarecimento de dúvidas; Repassar contato do
          profissional de saúde (rede credenciada) e Registrar reclamação.{" "}
        </p>
      </div>
      <div>
        <h4>Corretora imobiliária (estágio)</h4>
        <p>Direcional engenharia - 20/05/2017 à 05/08/2017 </p>
        <p>Captação de clientes, atendimento ao cliente e panfletagem. </p>
      </div>
      <div>
        <h4>Assistente administrativo</h4>
        <p>Hapvida assistência médica - 11/03/2016 à 15/04/2017 </p>
        <p>
          Responsável por receber documentações de sinistralidade de vários
          estados e fazer análise.{" "}
        </p>
      </div>
      <div>
        <h4>Auxiliar administrativo (jovem aprendiz)</h4>
        <p>Haptech soluções - 06/04/2015 à 08/03/2016 </p>
        <p>
          Atendimento ao cliente na recepção, correção de dados dos clientes em
          sistema, responsável por prorrogar inadimplência das empresas, e
          responsável também por consultar as empresas se receberam todas as
          carteirinhas dos funcionários.
        </p>
      </div>
    </section>
  );
}
