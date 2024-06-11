import '../styles/banner.scss';

export default function Banner() {
  return (
    <div className='banner-container'>
      <div className='text-container-banner'>
        <h1 className='title-banner'>
          Genésio Costa e Silva
        </h1>
        <h3 className='sub-title-banner'>
          Transformando Vidas com Psicologia
        </h3>
        <p className='p-banner'>
          Bem-vindo ao espaço de Genésio Costa e Silva, um profissional dedicado
          a promover o bem-estar e a saúde mental. Com uma abordagem centrada no
          paciente, Dr. Genésio oferece um ambiente acolhedor e seguro para que
          seus clientes possam explorar suas emoções e desafios de forma aberta
          e honesta.
        </p>
      </div>
      <img
        src='https://images.pexels.com/photos/4100482/pexels-photo-4100482.jpeg?auto=compress&cs=tinysrgb&w=900'
        alt='Génesio relaxando no sofá'
        className='image-banner'  
      />
    </div>
  );
}
