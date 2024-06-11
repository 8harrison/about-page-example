import styles from '../styles/about.module.scss';

export default function About() {
  return (
    <div className={styles['about-container']} id='About'>
      <h1>Sobre Mim</h1>
      <div>
        <img src='https://images.pexels.com/photos/4100429/pexels-photo-4100429.jpeg?auto=compress&cs=tinysrgb&w=600'/>
      <h3>
        Sou Genésio Costa e Silva, psicólogo clínico com formação em Psicologia
        pela [Nome da Universidade]. Minha missão é ajudar meus clientes a
        encontrar equilíbrio emocional, superar obstáculos e alcançar uma vida
        mais plena e satisfatória. Tenho experiência em trabalhar com uma
        variedade de questões, incluindo ansiedade, depressão, estresse,
        relacionamentos e desenvolvimento pessoal.
      </h3>
      </div>
    </div>
  );
}
