
import './App.css';
import Header from "./components/HeaderSection/Header";
import Hero from './components/HeroSection/HeroSection';
import { ContainerStyled } from './components/MainSection/MainStyled';

function App() {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Hero/>
      </ContainerStyled>
    </>
  );
}

export default App;