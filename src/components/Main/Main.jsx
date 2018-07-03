import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';
import { translate } from "react-i18next";
import data_en from '../../locales/data_en.json';
import data_ru from '../../locales/data_ru.json';

class Main extends Component {

    state = {
        hover: false,
        index: null
    };

    onHoverOn = (index) => this.setState({hover: true, index: index});
    onHoverOff = (index) => this.setState({hover: false, index: index});

    render() {
        const { i18n } = this.props, lang = i18n.language, en = data_en, ru = data_ru;
        return (
            <div className="wm_main">
                {lang === 'en' ?
                    en.map((course, index) =>
                        <Link key={index}
                              to={`/course/${course.subject}`}
                              onMouseEnter={() => this.onHoverOn(course.id)}
                              onMouseLeave={() => this.onHoverOff(course.id)}
                              color={course.subject && course.color}
                              className="sectionInterface">
                            <div>
                                {(this.state.hover && this.state.index === course.id) ?
                                    <div className='shortDescription'>{course.shortDescription}</div> :
                                    course.subject}
                            </div>
                        </Link>
                    ): ru.map((course, index) =>
                        <Link key={index}
                              to={`/course/${course.subject}`}
                              onMouseEnter={() => this.onHoverOn(course.id)}
                              onMouseLeave={() => this.onHoverOff(course.id)}
                              color={course.subject && course.color}
                              className="sectionInterface">
                            <div>
                                {(this.state.hover && this.state.index === course.id) ?
                                    <div className='shortDescription'>{course.shortDescription}</div> :
                                    course.subject}
                            </div>
                        </Link>)
                };
            </div>
        );
    }
}

export default translate()(Main);