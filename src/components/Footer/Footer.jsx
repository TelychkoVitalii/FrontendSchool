import React from 'react';
import { NavLink } from 'react-router-dom';
import { translate } from "react-i18next";
import fbLogo from '../../assets/facebook-logo.jpg';
import instaLogo from '../../assets/instagram-logo.png';
import tgLogo from '../../assets/telegram_logo.png';
import gmailLogo from '../../assets/gmail_logo.png';
import '../../styles/Footer.css';

function Footer(props) {
    const { t } = props;
    return (
        <footer id='footer'>
            <div className='footerContainer'>
                <span>&copy; Frontend School 2018</span>
                <div className='addLinks'>
                    <a href="http://linguacloud-skype.com.ua/" className='english' target='_blank' rel="noopener noreferrer">{t('english')}</a>
                    <NavLink to='/materials' activeClassName='active' className='materials'>{t('materials')}</NavLink>
                </div>
                <div className='socials'>
                    <a href="mailto:newme1989.5@gmail.com?subject=Здравствуйте. Хочу изучать фронтенд!">
                        <img src={gmailLogo} className='gmailLogo' alt="gmailLogo"/>
                    </a>
                    <img src={fbLogo} className='fbLogo' alt="fbLogo"/>
                    <img src={instaLogo} className='instaLogo' alt="instaLogo"/>
                    <a href="https://t.me/js_algorithms" target='_blank' rel="noopener noreferrer">
                        <img src={tgLogo} className='tgLogo' alt="tgLogo"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default translate()(Footer);