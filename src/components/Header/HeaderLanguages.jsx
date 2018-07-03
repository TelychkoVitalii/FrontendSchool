import React, {Component} from 'react';
import '../../styles/HeaderLanguages.css';
import i18n from '../../i18n';

class HeaderLanguages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLanguageStyle: false
        };
    }

    componentDidMount() {
        i18n.language === 'ru' ? this.setState({ activeLanguageStyle: true }) : this.setState({ activeLanguageStyle: false })
    }

    handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        this.setState({ activeLanguageStyle: !this.state.activeLanguageStyle })
    };

    render() {
        return (
            <ul className='navLanguages'>
                <li className={!this.state.activeLanguageStyle ? "ruLanguage" : 'ruLanguage activeLanguage'}
                    onClick={() => this.handleChangeLanguage("ru")}>RU</li>
                <span className='separator'>|</span>
                <li className={this.state.activeLanguageStyle ? "enLanguage" : 'enLanguage activeLanguage'}
                    onClick={() => this.handleChangeLanguage("en")}>EN</li>
            </ul>
        )
    }
}

export default HeaderLanguages;