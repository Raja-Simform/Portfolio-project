
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
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
        <Contact/>
      </ContainerStyled>
    </>
  );
}

export default App;