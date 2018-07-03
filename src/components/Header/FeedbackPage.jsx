import React from 'react';
import serg_avatar from '../../assets/serg_kovalenko.jpg';
import roman_avatar from '../../assets/roman.jpg';
import kate_avatar from '../../assets/kate.jpg';
import jazzter_avatar from '../../assets/jazzter.jpg';
import zoryana_avatar from '../../assets/zoryana.jpg';
import yaro_avatar from '../../assets/yaro.jpg';
import link_logo from '../../assets/link_logo.png';
import fb_logo from '../../assets/facebook-logo.jpg';
import '../../styles/FeedbackPage.css';
import { translate } from "react-i18next";

function FeedbackPage(props) {
    const { t } = props;
        return (
            <div className='feedback_main'>
                <span className='bgcFeedback'/>
                <div>
                    <img className='avatar' src={serg_avatar} alt="pupil1"/>
                    <a href="https://www.linkedin.com/in/serega-kovalenko-8032b6b2/" target='_blank' rel="noopener noreferrer">
                        <img src={link_logo} alt="link_logo" className='link_logo'/>
                    </a>
                    <span>{t('pupil1Title')}</span>
                    <span className='feedbackText'>{t('pupil1FeedbackText')}</span>
                </div>
                <div>
                    <img className='avatar' src={roman_avatar} alt="pupil2"/>
                    <a href="https://www.linkedin.com/in/roman-naminas/" target='_blank' rel="noopener noreferrer">
                        <img src={link_logo} alt="link_logo" className='link_logo'/>
                    </a>
                    <span>{t('pupil2Title')}</span>
                    <span className='feedbackText'>{t('pupil2FeedbackText')}</span>
                </div>
                <div>
                    <img className='avatar' src={kate_avatar} alt="pupil3"/>
                    <a href="https://www.linkedin.com/in/kate-derizemlya-422068158/" target='_blank' rel="noopener noreferrer">
                        <img src={link_logo} alt="link_logo" className='link_logo'/>
                    </a>
                    <span>{t('pupil3Title')}</span>
                    <span className='feedbackText'>{t('pupil3FeedbackText')}</span>
                </div>
                <div>
                    <img className='avatar' src={jazzter_avatar} alt="pupil4"/>
                    <a href="https://www.facebook.com/profile.php?id=100016533670768" target='_blank' rel="noopener noreferrer">
                        <img src={fb_logo} alt="fb_logo" className='link_logo'/>
                    </a>
                    <span>{t('pupil4Title')}</span>
                    <span className='feedbackText'>{t('pupil4FeedbackText')}</span>
                </div>
                <div>
                    <img className='avatar' src={zoryana_avatar} alt="pupil5"/>
                    <a href="" rel="noopener noreferrer">
                        <img src={link_logo} alt="link_logo" className='link_logo'/>
                    </a>
                    <span>{t('pupil5Title')}</span>
                    <span className='feedbackText'>{t('pupil5FeedbackText')}</span>
                </div>
                <div>
                    <img className='avatar' src={yaro_avatar} alt="pupil6"/>
                    <a href="" rel="noopener noreferrer">
                        <img src={link_logo} alt="link_logo" className='link_logo'/>
                    </a>
                    <span>{t('pupil6Title')}</span>
                    <span className='feedbackText'>{t('pupil6FeedbackText')}</span>
                </div>
            </div>
        )
}

export default translate()(FeedbackPage);