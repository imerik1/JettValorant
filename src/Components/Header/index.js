import valorant from "../../Assets/logoValorant.svg";
import riot from "../../Assets/logoRiot.svg";
import { getData } from "../../Data/index";

const navs = getData()[3].map((nav, id) => {
  return (
    <a
      key={id}
      className={`nav nav__${nav}`}
      href='/'
      rel='noopener noreferrer'
    >
      {nav}
    </a>
  );
});

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__logos'>
        <img src={riot} alt='Logo da Riot' />
        <img src={valorant} alt='Logo do Valorant' />
      </div>
      <nav className='header__navs'>{navs}</nav>
      <div className='header__user'>
        <a
          href='https://github.com/imerik1'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img
            src='https://avatars3.githubusercontent.com/u/65323066?s=460&u=3cc08af549990041fcc2ed5fa00e1b7f1eebf061&v=4'
            alt='userLogo'
          />
          <span>imerik1</span>
        </a>
      </div>
    </header>
  );
};
