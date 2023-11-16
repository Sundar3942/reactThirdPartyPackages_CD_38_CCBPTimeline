// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="card">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="title-and-duration-container">
        <h1 className="course-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration-time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
