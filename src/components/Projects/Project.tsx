import { ProjectStyled } from "./ProjectStyled";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../constants/ProjectConstant";
export default function Projects() {
  return (
    <ProjectStyled id="project">
      <h2>My Projects</h2>
      <div className="cards">
        {projects.map((val,index) => {
          return (
            <ProjectCard
             key={`proejct-${index}`}
              title={val.title}
              githubProp={val.github}
              live={val.live}
              desc={val.desc}
              technology={val.technology}
            />
          );
        })}
      </div>
    </ProjectStyled>
  );
}