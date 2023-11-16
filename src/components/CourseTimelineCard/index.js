// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  const renderTagItem = tagItem => {
    const {name} = tagItem
    return (
      <p key={name} className="tag-item">
        {name}
      </p>
    )
  }

  return (
    <div className="card">
      <div className="title-and-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration-time">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <div className="tags-container">
        {tagsList.map(each => renderTagItem(each))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
