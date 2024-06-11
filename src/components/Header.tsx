'use client';
import styles from '../styles/header.module.scss';
import { useNavMobileContext } from './contexts';
import { HamburgerIcon } from './icon';

const options = [
  { link: '#', title: 'Home' },
  { link: '#Services', title: 'Serviços' },
  { link: '#About', title: 'Sobre mim' },
  { link: '#Contact', title: 'Contato' },
];

export default function Header() {
  const { isVisible, setIsVisible } = useNavMobileContext();
  const redirect = () => {
    setIsVisible(false);
    
  };
  return (
    <nav className={styles['header-container']}>
      <div>
        <a href='#'>
          <img
            src='https://uploads.turbologo.com/uploads/design/preview_image/73524/preview_image20230419-18343-qps3vb.png'
            alt='Logo Genésio'
          />
          <span>Genésio Costa e Silva</span>
        </a>
        <div>
          <ul>
            {options.map((op) => (
              <li key={op.title}>
                <a href={op.link}>{op.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='lg:hidden flex md:hidden'>
          <button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? (
              <span className='font-bold text-2xl text-white'>x</span>
            ) : (
              <HamburgerIcon fill='#ffffff' />
            )}
          </button>
        </div>
        {isVisible && (
          <div className='w-full h-[calc(100vh - 20px)] fixed top-16 left-0 bg-gray-800'>
            <div className=''>
              <ul className='w-full flex flex-col justify-center items-center'>
                {options.map((op) => (
                  <a
                    href={(op.link)}
                    onClick={redirect}
                    className='w-full border-b p-4 border-gray-700 flex justify-center hover:bg-gray-700'
                    key={op.title}
                  >
                    <li className='text-white'>{op.title}</li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
