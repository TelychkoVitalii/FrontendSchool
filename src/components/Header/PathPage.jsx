import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { translate } from "react-i18next";
import '../../styles/PathPage.css';

class PathPage extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className='path'>
                <div className='bgc' />
                <div className='num num1'>1</div>
                <div data-tip='html' data-for='html' className='lang htmlcss'>
                    <Link to='/course/HTML/CSS'>HTML/CSS</Link>
                <ReactTooltip id='html' multiline={true}>
                    <div>{t('html1')} <br/> {t('html2')} <br/> {t('html3')}</div>
                </ReactTooltip>
                </div>
                <hr className='first'/>
                <div data-tip='js' data-for='js' className='lang js'>
                    <Link to='/course/Javascript'>Javascript</Link>
                <ReactTooltip id='js' multiline={true}>
                    <div>{t('js1')} <br/> {t('js2')} <br/> {t('js3')}</div>
                </ReactTooltip>
                </div>
                <div className='num num2'>2</div>
                <hr className='second'/>
                <div className='num num3'>3</div>
                <div data-tip='react' data-for='react' className='lang react'>
                    <Link to='/course/React'>React</Link>
                    <ReactTooltip id='react' multiline={true}>
                        <div>{t('react1')} <br/> {t('react2')} <br/> {t('react3')}</div>
                    </ReactTooltip>
                </div>
                <div data-tip='redux' data-for='redux' className='lang redux'>
                    <Link to='/course/Redux'>Redux/Mobx</Link>
                    <ReactTooltip id='redux' multiline={true}>
                        <div>{t('redux1')} <br/> {t('redux2')} <br/> {t('redux3')}</div>
                    </ReactTooltip>
                </div>
                <div className='num num4'>4</div>
                <hr className='third'/>
                <div className='num num5'>5</div>
                <div data-tip='angular' data-for='angular' className='lang angular'>
                    <Link to='/course/Angular'>Angular</Link>
                    <ReactTooltip id='angular' multiline={true}>
                        <div>{t('angular1')} <br/> {t('angular2')} <br/> {t('angular3')}</div>
                    </ReactTooltip>
                </div>
                <div className='num num5'>5</div>
                <div data-tip='algorithms' data-for='algorithms' className='lang algorithms'>
                    <Link to='/course/Algorithms'>Algorithms</Link>
                    <ReactTooltip id='algorithms' multiline={true}>
                        <div>{t('algorithms1')} <br/> {t('algorithms2')} <br/> {t('algorithms3')}</div>
                    </ReactTooltip>
                </div>
                <div className='num num6'>6</div>
                <hr className='forth'/>
                <hr className='fifth'/>
            </div>
        )
    }
}

export default translate()(PathPage);