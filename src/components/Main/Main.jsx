import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';
import { translate } from "react-i18next";

class Main extends Component {
    state = {
        hover: false,
        index: null
    };

    onHoverOn = (index) => this.setState({hover: true, index: index});
    onHoverOff = (index) => this.setState({hover: false, index: index});

    render() {
        const { i18n } = this.props, langSection = i18n.store.data[i18n.language].translations.data;
        return (
            <div className="wm_main">
                {langSection.map((course, index) =>
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
                    )};
            </div>
        );
    }
}

export default translate()(Main);