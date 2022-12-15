import { Intro } from "./components/Intro";
import { TiposCafe } from "./components/TiposCafe";
import { HomeContainer } from "./styles";


export const Home = () => (
  <HomeContainer>
    <Intro />
    <TiposCafe />
  </HomeContainer>
);
