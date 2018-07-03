import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Main.css';
import { translate } from "react-i18next";

class Main extends Component {
    lang;
    i18n;

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            index: null
        };

        this.i18n = props.i18n;
        this.lang = props.i18n.language;
    }

    onHoverOn = (index) => this.setState({hover: true, index: index});
    onHoverOff = (index) => this.setState({hover: false, index: index});

    render() {
        const langSection = this.i18n.store.data[this.lang],
              langSectionData = langSection.translations.data;

        return (
            <div className="wm_main">
                {langSectionData.map((course, index) =>
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