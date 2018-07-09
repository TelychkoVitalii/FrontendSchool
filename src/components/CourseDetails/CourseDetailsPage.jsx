import React, { Component } from 'react';
import CourseHeader from './CourseHeader';
import CourseProgram from './CourseProgram';
import CourseInformation from './CourseInformation';
import ModalInfo from './ModalInfo';
import ModalEnroll from './ModalEnroll';
import '../../styles/CourseDetailsPage.css';
import { translate } from "react-i18next";

class CourseDetailsPage extends Component {
    state = {
        isOpen: false,
        isEnrollOpen: false
    };

    onToggleModalInfo = () => this.setState({isOpen: !this.state.isOpen});
    onToggleModalEnroll = () => this.setState({isEnrollOpen: !this.state.isEnrollOpen});

    render() {
        const courseTitle = this.props.location.pathname.replace('/', ''), { t, i18n } = this.props,
              langSection = i18n.store.data[i18n.language].translations.data;
        return (
            <div className='courseDetails'>
                {langSection.map((section, index) => {
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
