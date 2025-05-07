
import './App.css';
import Header from "./components/HeaderSection/Header";
import { HeroSectionStyled } from "./components/HeroSection/HeroSectionStyled";
import { ContainerStyled } from './components/MainSection/MainSectionStyled';

function App() {
  return (
    <>
      <Header />
      <ContainerStyled>
        <HeroSectionStyled>
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a passionate developer specializing in frontend technologies.</p>
        </HeroSectionStyled>
      </ContainerStyled>
    </>
  );
}

export default App;