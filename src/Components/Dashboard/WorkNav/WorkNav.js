import React from 'react'
import CourseFinder from './Courses/CourseFinder'
import AssignmentFinder from './Assignments/AssignmentFinder'

export default props => {
    const { crumbs, setCrumbs } = props
    const [course, setCourse] = React.useState(null)

    const onCourseSelect = course => {
        setCrumbs([...crumbs, {
            path: course,
            target: "/home",
        }])
        setCourse(course)
    }

    const handleBack = event => {
        setCourse(null);
        setCrumbs([
            crumbs[0],
        ])
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
