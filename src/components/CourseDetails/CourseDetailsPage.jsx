import React, { Component } from 'react';
import CourseHeader from './CourseHeader';
import CourseProgram from './CourseProgram';
import CourseInformation from './CourseInformation';
import ModalInfo from './ModalInfo';
import ModalEnroll from './ModalEnroll';
import '../../styles/CourseDetailsPage.css';
import { translate } from "react-i18next";
import data_en from '../../locales/data_en.json';
import data_ru from '../../locales/data_ru.json';

class CourseDetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            isEnrollOpen: false
        }
    }

    onToggleModalInfo = () => this.setState({isOpen: !this.state.isOpen});
    onToggleModalEnroll = () => this.setState({isEnrollOpen: !this.state.isEnrollOpen});

    render() {
        const courseTitle = this.props.location.pathname.replace('/course/', ''),
            { t, i18n } = this.props, lang = i18n.language, en = data_en, ru = data_ru;
        return (
            <div className='courseDetails'>
                {lang === 'en' ? en.map((section, index) => {
                        return (
                            (section.subject === courseTitle) && <div key={index}>
                                <CourseHeader
                                    courseTitle={courseTitle}
                                    availability={section.availability}
                                    courseDuration={section.courseDuration}
                                    nearestDate={section.nearestDate}
                                />
                                <div className='courseBody'>
                                    <CourseProgram
                                        courseProgram={section.courseProgram}
                                        projectsInfo={section.projectsInfo}
                                    />
                                    <div className='info'>
                                        <CourseInformation
                                            employmentPercentage={section.employmentPercentage}
                                            timesPerWeek={section.timesPerWeek}
                                            oneLessonDuration={section.oneLessonDuration}
                                            type={section.type}
                                            mode={section.mode}
                                            price={section.price}
                                        />
                                        <div className='mainButtons'>
                                            <button className='publicButton'
                                                    onClick={this.onToggleModalInfo}>{t('moreInfo')}</button>
                                            <button className='publicButton'
                                                    onClick={this.onToggleModalEnroll}>{t('enroll')}</button>
                                        </div>
                                    </div>
                                    <ModalInfo
                                        isOpen={this.state.isOpen}
                                        isClosed={this.onToggleModalInfo}
                                        courseTitle={courseTitle}
                                    />
                                    <ModalEnroll
                                        isOpen={this.state.isEnrollOpen}
                                        isClosed={this.onToggleModalEnroll}
                                        courseTitle={courseTitle}
                                    />
                                </div>
                            </div>
                        )}
                    ): ru.map((section, index) => {
                    return (
                        (section.subject === courseTitle) && <div key={index}>
                            <CourseHeader
                                courseTitle={courseTitle}
                                availability={section.availability}
                                courseDuration={section.courseDuration}
                                nearestDate={section.nearestDate}
                            />
                            <div className='courseBody'>
                                <CourseProgram
                                    courseProgram={section.courseProgram}
                                    projectsInfo={section.projectsInfo}
                                />
                                <div className='info'>
                                    <CourseInformation
                                        employmentPercentage={section.employmentPercentage}
                                        timesPerWeek={section.timesPerWeek}
                                        oneLessonDuration={section.oneLessonDuration}
                                        type={section.type}
                                        mode={section.mode}
                                        price={section.price}
                                    />
                                    <div className='mainButtons'>
                                        <button className='publicButton'
                                                onClick={this.onToggleModalInfo}>{t('moreInfo')}</button>
                                        <button className='publicButton'
                                                onClick={this.onToggleModalEnroll}>{t('enroll')}</button>
                                    </div>
                                </div>
                                <ModalInfo
                                    isOpen={this.state.isOpen}
                                    isClosed={this.onToggleModalInfo}
                                    courseTitle={courseTitle}
                                />
                                <ModalEnroll
                                    isOpen={this.state.isEnrollOpen}
                                    isClosed={this.onToggleModalEnroll}
                                    courseTitle={courseTitle}
                                />
                            </div>
                        </div>
                    )}
                )}
            </div>
    )}
}

export default translate()(CourseDetailsPage);
