import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';
import { translate } from "react-i18next";

class CourseInformation extends Component {
    render() {
        const { t, employmentPercentage, timesPerWeek, oneLessonDuration, type, mode, price } = this.props;
        return (
            <div className='courseBodyInfo'>
                <span className='courseProgramInfoTitle'>{t('needToKnow')}</span>
                <div>{t('employment')} -
                    <a href='https://www.npmjs.com/npm/state-of-javascript-frameworks-2017-part-1' target='blank'
                       className='quantity'> {employmentPercentage}
                    </a>
                </div>
                <div>{t('lessonsPerWeek')} -
                    <span className='quantity'> {timesPerWeek}</span>
                </div>
                <div>{t('lessonDuration')} -
                    <span className='quantity'> {oneLessonDuration}</span>
                </div>
                <div>{t('classesType')} -
                    <span className='quantity'> {type}</span>
                </div>
                <div data-tip='online' data-for='online'>{t('classesMode')} -
                    <a href='https://www.distancelearningportal.com/articles/1793/6-main-advantages-of-studying-short-courses-online.html' target='blank'
                       className='quantity'> {mode}</a>
                    <ReactTooltip id='online'>
                        <div>Skype</div>
                    </ReactTooltip>
                </div>
                <div data-tip='price' data-for='payment'>{t('coursePrice')} -
                    <span className='quantity'> {price}</span>
                    <ReactTooltip id='payment' multiline={true}>
                        <div>{t('paymentAfter')} <br/>
                            {t('paymentInstallments')}
                        </div>
                    </ReactTooltip>
                </div>
                <div className='firstLessonInfo'>
                    {t('freeLesson')}
                </div>
            </div>
        )
    }
}

export default translate()(CourseInformation);