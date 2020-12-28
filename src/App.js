import { Header } from "./Components/Header";
import { Jett } from "./Components/Jett";
import { Main } from "./Components/Main";

export default function Site() {
  return (
    <section id='root'>
      <Jett />
      <Header />
      <Main />
    </section>
  );
}
