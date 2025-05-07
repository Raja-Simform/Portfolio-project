
import './App.css';
import Header from "./components/HeaderSection/Header";
import { HeroSection } from "./components/HeroSection/HeroSectionStyled";
import { Container } from './components/MainSection/MainSectionStyled';

function App() {
  return (
    <>
      <Header />
      <Container>
        <HeroSection>
          <h1>Welcome to My Portfolio</h1>
          <p>I'm a passionate developer specializing in frontend technologies.</p>
        </HeroSection>
      </Container>
    </>
  );
}

export default App;