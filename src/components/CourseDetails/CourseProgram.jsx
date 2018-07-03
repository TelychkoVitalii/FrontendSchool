import React from 'react';
import { translate } from "react-i18next";

function CourseProgram(props) {
    const { t, courseProgram, projectsInfo } = props;
    return (
        <div className='courseBodyProgram'>
            <span className='courseProgramTitle'>{t('programCourse')}</span>
            <ul>
                {courseProgram.map((programItem, index) => {
                    return <li key={index} className='programListItem'>{programItem}</li>
                })}
            </ul>
            <span>{projectsInfo}</span>
        </div>
    )
}

export default translate()(CourseProgram);