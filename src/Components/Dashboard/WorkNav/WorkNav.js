import React from 'react'
import CourseFinder from '../Courses/CourseFinder'
import AssignmentFinder from '../Assignments/AssignmentFinder'

export default props => {
    const [course, setCourse] = React.useState(null)

    const onCourseSelect = event => {
        setCourse(event.currentTarget)
    }

    return (
        <div>
            {course ? (
                <AssignmentFinder />
            ) : (
                <CourseFinder onCourseSelect={onCourseSelect} />
            )}
        </div>
    )
}
