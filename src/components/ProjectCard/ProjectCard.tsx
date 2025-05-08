import github from '../../assets/github.svg';
import externalLink from '../../assets/external-link-icon.svg'
export default function ProjectCard(){
    return (<>
      <div className="link">
        <a href=""><img src={github} alt="github"/></a>
        <a href=""><img src={externalLink} alt="github"/></a>
      </div>
      <div className="title">
        <h2></h2>
      </div>
      <div className="description">
        <p></p>
      </div>
      <div className="footer">
        <img src="" alt="" />
      </div>
    </>)
}