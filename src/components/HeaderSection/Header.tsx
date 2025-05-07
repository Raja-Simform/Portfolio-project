import { HeaderComponent } from "./HeaderSectionStyled";
import { Logo } from "../LogoComponent/LogoComponentStyled";
import { Navigation } from "../NavigationComponent/NavigationComponentStyled";
import { MobileMenuButton } from "../MobileMenuButtonComponent/MobileMenuButtonComponentStyled";
export default function Header() {
  return (
    <HeaderComponent>
      <Logo>
        <p>{"< Raja Jha />"}</p>
      </Logo>
      <Navigation className="navigation">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button>Resume</button>
      </Navigation>
      <MobileMenuButton aria-label="Toggle menu">
        ☰
      </MobileMenuButton>
    </HeaderComponent>
  );
}