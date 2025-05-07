import styled from "styled-components";
import './App.css';
import Header from "./components/Header/Header";

const Container = styled.main`
  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 40px; 
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
  }
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