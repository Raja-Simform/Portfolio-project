import styled from "styled-components";
import './App.css';
import Header from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSectionStyled";
const Container = styled.main`
  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 40px; 
`;


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