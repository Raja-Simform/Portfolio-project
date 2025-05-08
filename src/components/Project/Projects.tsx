import { ProjectStyled } from "./ProjectStyled"
import ProjectCard from "../ProjectCard/ProjectCard"
export default function Projects(){
    return (
    <ProjectStyled>
      <h2>My Projects</h2>
      <ProjectCard title={"Calculator"} descritpion={""}/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>
      <ProjectCard/>

    </ProjectStyled>
    )
}