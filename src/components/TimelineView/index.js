import './index.css'
import {Chrono} from 'react-chrono'
import {Component} from 'react'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

class TimelineView extends Component {
  renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard eachObj={item} key={item.id} />
    }
    return <ProjectTimelineCard eachObj={item} key={item.id} />
  }

  render() {
    const {timelineItemsList} = this.props
    return (
      <div>
        <h1 className="main-heading">
          MY JOURNEY OF <br /> <span className="ccbp-heading">CCBP 4.0</span>
        </h1>
        <Chrono
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          theme={{
            secondary: 'white',
          }}
        >
          {timelineItemsList.map(eachItem => this.renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
