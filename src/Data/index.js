import cloud from "../Assets/firstSkill.svg";
import up from "../Assets/secondSkill.svg";
import tail from "../Assets/thirdSkill.svg";
import blade from "../Assets/fourthSkill.svg";
import coin from "../Assets/coin.svg";
import rifle from "../Assets/gunRifle.svg";
import smg from "../Assets/gunSmg.svg";
import pistol from "../Assets/gunPistol.svg";

export function getData() {
  const lore = [
    {
      title: `Lore and Storyline`,
      description1: `In Valorant lore, Jett is an agile agent expert in the art of evasion. She overwhelms enemies and wounds them with a blade without them knowing her position.`,
      description3: `There are a total of six groups of weapons that players will be able to purchase at the start of each round with each costing a different amount based on their power and weapon type. None of the weapons are tied exclusively to a specific character, so players will be able to use any of the weapons available in the FPS, no matter the character they are using for a particular match. `,
      description2: `Of Korean origin, Jett is an agile fighter who gives priority to movement. Her abilities focus on stealth with jumps that allow her to reach high ledges, teleportation, and smoke bombs. Her ultimate ability gives her kunaïs that inflict moderate to heavy damage, remaining very accurate even when she moves.`,
      name: `Jett`,
      country: `South Korea`,
      mainabiliity: `Tailwind`,
      abiliity: `Cloudburst, Updraft`,
      ultimate: `Blade Storm`,
    },
  ];
  const abiliity = [
    {
      image: <img src={cloud} alt='CLOUDBURST' />,
      name: `CLOUDBURST:`,
      description: `Deploys a cloud of smoke that obstructs the enemy's vision. Press the skill button a second time to lift the cloud.`,
    },
    {
      image: <img src={up} alt='UPDRAFT' />,
      name: `UPDRAFT:`,
      description: `Propels you through the air.`,
    },
    {
      image: <img src={tail} alt='TAILWIND' />,
      name: `TAILWIND:`,
      description: `Dashes a short distance in the direction you want to go.`,
    },
    {
      image: <img src={blade} alt='BLADE STORM' />,
      name: `BLADE STORM:`,
      description: `Automatically equips the agent with various throwing knives that one shot if you hit the head. Performing a kill restores all the knives.`,
    },
  ];
  const guns = [
    {
      image: <img src={rifle} alt='Rifle' />,
      name: `RIFLES`,
      description: `GUARDIAN`,
      coin: <img src={coin} alt='Coin' />,
      value: `2,700`,
    },
    {
      image: <img src={smg} alt='SMG' />,
      name: `SMG`,
      description: `SPECTRE`,
      coin: <img src={coin} alt='Coin' />,
      value: `1.600`,
    },
    {
      image: <img src={pistol} alt='Pistol' />,
      name: `SIDEARM`,
      description: `SHERIFF`,
      coin: <img src={coin} alt='Coin' />,
      value: `900`,
    },
  ];
  const navs = [
    `GAME`,
    `CHAMPIONS`,
    `NEWS`,
    `PATCH NOTES`,
    `DISCOVER`,
    `ESPORTS`,
    `UNIVERSE`,
    `SHOP`,
    `SUPPORT`,
  ];
  return [lore, abiliity, guns, navs];
}
