import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {eachObj} = props
  const {courseTitle, description, duration, tagsList} = eachObj
  return (
    <div className="sub-app-container">
      <div className="title-icon-container">
        <h1 className="title-heading">{courseTitle}</h1>
        <div className="logo-duration-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="ul-container">
        {tagsList.map(each => (
          <li key={each.id} className="list-container">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
