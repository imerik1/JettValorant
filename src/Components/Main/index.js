import jett from "../../Assets/jettName.svg";
import example from "../../Assets/example.svg";
import { getData } from "../../Data/index";

const abilities = getData()[1].map((ability, id) => {
  return (
    <div key={id} className='ability' id={`ability${id}`}>
      {ability.image}
      <h1>{ability.name}</h1>
      <h2>{ability.description}</h2>
    </div>
  );
});

export const Main = () => {
  const desc = getData()[0][0];
  return (
    <main className='main'>
      <section className='bg__main'>
        <div className='bg__one'>
          <div className='bg__red'></div>
          <div className='bg__two'>
            <article className='lore'>
              <header className='lore__header'>
                <h1>{desc.title}</h1>
                <h2>{desc.description1}</h2>
                <h2>{desc.description2}</h2>
                <h2>{desc.description3}</h2>
              </header>
              <section className='lore__section'>
                <div className='agent__info'>
                  <h1 className='title'>Agents Information</h1>
                  <span className='desc__title'>Name</span>
                  <span className='desc__desc'>{desc.name}</span> <br />
                  <span className='desc__title'>Country</span>
                  <span className='desc__desc'>{desc.country}</span> <br />
                  <span className='desc__title'>Signature Ability</span>
                  <span className='desc__desc'>{desc.mainabiliity}</span> <br />
                  <span className='desc__title'>Ability</span>
                  <span className='desc__desc'>{desc.abiliity}</span> <br />
                  <span className='desc__title'>Ultimate</span>
                  <span className='desc__desc'>{desc.ultimate}</span>
                </div>
                <img src={example} alt='Vídeo' />
              </section>
              <section className='list__abilities'>{abilities}</section>
            </article>
            <div className='jett__title'>
              <img src={jett} alt='JETT NAME' />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
