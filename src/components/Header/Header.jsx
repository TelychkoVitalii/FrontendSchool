import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { translate } from "react-i18next";
import HeaderLanguages from "./HeaderLanguages";
import '../../styles/Header.css';

function Header(props) {
    const { t } = props;
    return (
        <header>
            <ul className="nav">
                <li className="brand">
                    <Link to='/courses' className="brandLink">
                        <span id='brandName'>Frontend</span> School
                    </Link>
                </li>
                <li className="navLink">
                    <NavLink activeClassName='active' to='/about'>{t('about')}</NavLink>
                </li>
                <span className='separator'>|</span>
                <li className="navLink">
                    <NavLink activeClassName='active' to='/path'>{t('path')}</NavLink>
                </li>
                <span className='separator'>|</span>
                <li className="navLink">
                    <NavLink activeClassName='active' to='/feedback'>{t('feedback')}</NavLink>
                </li>
                <span className='separator'>|</span>
                <li className="navLink">
                    <NavLink activeClassName='active' to='/contacts'>{t('contacts')}</NavLink>
                </li>
                <HeaderLanguages />
            </ul>
        </header>
    );
}

export default translate()(Header);