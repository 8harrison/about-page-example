import styles from '../styles/contact.module.scss';
import Form from './Form';
// import Mapa from './Mapa';

export default function Contact() {
  return (
    <div className={styles['contact-container']} id='Contact'>
      <div>
        <h3>Contato</h3>
        <div>
          <h4>
            <img src='https://www.svgrepo.com/show/110197/whatsapp.svg' /> (99)
            99999-9999
          </h4>
          <h4>
            <img src='https://www.svgrepo.com/show/511917/email-1572.svg' />
            exemplo@exemplo.com
          </h4>
        </div>
      </div>
      <Form />
      {/* <Mapa/> */}
    </div>
  );
}
