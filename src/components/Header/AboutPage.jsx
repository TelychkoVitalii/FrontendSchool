import React, { Component } from 'react';
import Rocket from '../Common/Rocket';
import '../../styles/AboutPage.css';
import ReactTooltip from 'react-tooltip';
import { translate } from "react-i18next";

class AboutPage extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className='aboutMain'>
                <div className='bgcAbout' />
                <div className='publicBgc aboutStrings'>
                    <div className='mainText'>{t('aboutTextIntro1')}</div>
                    <div>{t('aboutTextIntro2')}</div>
                    <div>{t('aboutTextIntro3')}</div>
                    <div>{t('aboutTextIntro4')}</div>
                    <div>{t('aboutTextIntro5')}</div>
                    <div>{t('aboutTextIntro6')}</div>
                </div>
                <div data-tip='next' data-for='next' className='rocketBlock'>
                    <Rocket />
                    <ReactTooltip id='next'>
                        <div>{t('nextStep')}</div>
                    </ReactTooltip>
                </div>
            </div>
        )
    }
}

export default translate("translations")(AboutPage);