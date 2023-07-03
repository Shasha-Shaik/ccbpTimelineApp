import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {eachObj} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = eachObj
  return (
    <div className="sub-app-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-icon-container">
        <h1 className="title-heading">{projectTitle}</h1>
        <div className="logo-duration-container">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="visit">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
