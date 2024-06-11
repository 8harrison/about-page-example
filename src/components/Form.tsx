import styles from '../styles/form.module.scss';

export default function Form() {
  return (
    <div className={styles['form-container']}>
      <div>
        <h3>Deixe uma mensagem que entraremos em contato.</h3>
        <label>
          Email
          <input />
        </label>
        <label>
          Nome
          <input />
        </label>
        <label>
          Sua mensagem:
          <textarea />
        </label>
        <button>Enviar mensagem</button>
      </div>
    </div>
  );
}
