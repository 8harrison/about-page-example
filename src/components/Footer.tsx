import styles from '../styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles['footer-container']}>
      <div>
        <span>
          © 2024 <a>Harrison Monteiro de Oliveira™</a>. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
