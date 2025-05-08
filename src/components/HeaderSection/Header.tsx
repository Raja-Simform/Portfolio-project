import { HeaderStyled } from "./HeaderStyled";
import { LogoStyled } from "../Logo/LogoStyled";
import { NavigationStyled } from "../Navigation/NavigationStyled";
import { MobileMenuButtonStyled } from "../MobileMenuButton/MobileMenuButtonStyled";
import Resume from '../../assets/Raja_Rsume _final.pdf'
import { useState } from "react";
export default function Header() {
  const [open,setOpen]=useState(false);
  function HandleToggle(){
    setOpen(!open);
  }
  return (
    <HeaderStyled>
      <LogoStyled>
        <p>{"< Raja Jha />"}</p>
      </LogoStyled>
      <NavigationStyled className={`navigation ${open ? 'open' : ''}`}>
        <a href="#home" onClick={()=>setOpen(false)}>Home</a>
        <a href="#about" onClick={()=>setOpen(false)}>About Me</a>
        <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
        <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
        <a href={Resume} download onClick={()=>setOpen(false)} ><button>Resume</button></a>
      </NavigationStyled>
      <MobileMenuButtonStyled aria-label="Toggle menu"
       onClick={HandleToggle}>
        ☰
      </MobileMenuButtonStyled>
    </HeaderStyled>
  );
}