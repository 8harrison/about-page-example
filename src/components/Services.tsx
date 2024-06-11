import styles from '../styles/services.module.scss';

interface ServicesAvailable {
  service: string;
  image: string;
}

export default function Services() {
  const services: ServicesAvailable[] = [
    { service: 'Terapia Individual', image: 'https://images.pexels.com/photos/8560218/pexels-photo-8560218.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { service: 'Terapia de Casal', image: 'https://images.pexels.com/photos/4098142/pexels-photo-4098142.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { service: 'Terapia Familiar', image: 'https://images.pexels.com/photos/4262424/pexels-photo-4262424.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { service: 'Aconselhamento para Adolescentes', image: 'https://images.pexels.com/photos/4100656/pexels-photo-4100656.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { service: 'Grupos de Apoio', image: 'https://images.pexels.com/photos/5711009/pexels-photo-5711009.jpeg?auto=compress&cs=tinysrgb&w=600' },
  ];
  return (
    <div className={styles['services-container']} id='Services'>
      <h2>Serviços Oferecidos</h2>
      <ul>
        {services.map((ser: ServicesAvailable) => (
          <li key={ser.service}>
            {ser.service}
            <img src={ser.image} />
          </li>
        ))}
      </ul>
    </div>
  );
}
