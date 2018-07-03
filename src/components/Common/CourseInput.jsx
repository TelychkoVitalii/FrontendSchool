import React from 'react';
import { translate } from "react-i18next";

function CourseInput(props) {
    const { t, value, onCourseChanged } = props;
    return (
        <div>
            <label>{t('moreInfoCourse')}:
                <input type="text"
                       className='question'
                       value={value}
                       onChange={onCourseChanged}
                       required />
            </label>
        </div>
    )
}
export default translate()(CourseInput);