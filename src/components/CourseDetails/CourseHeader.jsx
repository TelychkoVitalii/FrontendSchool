import React from 'react';
import { translate } from "react-i18next";

function CourseHeader(props) {
    const { t, courseTitle, availability, courseDuration, nearestDate } = props;
    return (
        <div className='courseHeader'>
            <span className='courseTitle'>{courseTitle}
                <sup className='availability'>{availability}</sup>
            </span>
            <span className='courseDuration'><span>{t('durationTitle')}: </span>{courseDuration}</span>
            <span className='courseNearest'><span>{t('nearestTitle')}: </span> {nearestDate}</span>
        </div>
    )
}

export default translate()(CourseHeader);