import React from 'react'
import CourseFinder from './Courses/CourseFinder'
import AssignmentFinder from './Assignments/AssignmentFinder'

export default props => {
    const [course, setCourse] = React.useState(null)

    const onCourseSelect = event => {
        setCourse(event.currentTarget)
    }

    const handleBack = event => {
        setCourse(null);
    }

    return (
        <div>
            {course ? (
                <AssignmentFinder handleBack={handleBack} />
            ) : (
                <CourseFinder onCourseSelect={onCourseSelect} />
            )}
        </div>
    )
}
