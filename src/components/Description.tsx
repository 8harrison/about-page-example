import styles from '../styles/description.module.scss';

export default function Description() {
  return (
    <div className={styles['description-container']}>
      <h2>Abordagem Terapêutica</h2>
      <p>
        Utilizo uma abordagem integrativa, combinando técnicas de terapia
        cognitivo-comportamental, humanista e psicodinâmica, adaptando meu
        método às necessidades únicas de cada indivíduo. Acredito que a terapia
        é um espaço de co-construção, onde trabalhamos juntos para encontrar
        caminhos de crescimento e transformação.
      </p>
    </div>
  );
}
