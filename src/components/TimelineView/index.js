// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList[1])

  const renderView = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="page">
      <h2 className="page-subtitle">
        MY JOURNEY OF <br />
        <span className="page-title">CCBP 4.0</span>
      </h2>
      <div className="chrono-container">
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(each => renderView(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
