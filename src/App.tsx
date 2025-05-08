
import './App.css';
import About from './components/About/About';
import Header from "./components/HeaderSection/Header";
import Hero from './components/HeroSection/Hero';
import { ContainerStyled } from './components/MainSection/MainStyled';

function App() {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Hero/>
        <About/>
      </ContainerStyled>
    </>
  );
}

export default App;