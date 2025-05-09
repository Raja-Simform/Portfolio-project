
import './App.css';
import About from './components/About/About';
import Header from "./components/HeaderSection/Header";
import Hero from './components/HeroSection/Hero';
import { ContainerStyled } from './components/MainSection/MainStyled';
import Projects from './components/Projects/Project';

function App() {
  return (
    <>
      <Header />
      <ContainerStyled>
        <Hero/>
        <About/>
        <Projects/>
      </ContainerStyled>
    </>
  );
}

export default App;