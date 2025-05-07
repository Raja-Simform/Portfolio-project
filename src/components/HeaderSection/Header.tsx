import { HeaderStyled } from "./HeaderStyled";
import { LogoStyled } from "../Logo/LogoStyled";
import { NavigationStyled } from "../Navigation/NavigationStyled";
import { MobileMenuButtonStyled } from "../MobileMenuButton/MobileMenuButtonStyled";
export default function Header() {
  return (
    <HeaderStyled>
      <LogoStyled>
        <p>{"< Raja Jha />"}</p>
      </LogoStyled>
      <NavigationStyled className="navigation">
        <a href="#home">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button>Resume</button>
      </NavigationStyled>
      <MobileMenuButtonStyled aria-label="Toggle menu">
        ☰
      </MobileMenuButtonStyled>
    </HeaderStyled>
  );
}