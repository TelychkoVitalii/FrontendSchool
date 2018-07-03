import React from 'react';
import good_job from '../../assets/good_job.jpg';
import { translate } from "react-i18next";

function Result(props) {
    const { t } = props;
    return (
        <div className='showResult'>
            <div>{t('result1')}</div>
            <div>{t('result2')} {t('result3')}</div>
            <img className='imgGoodJob' src={good_job} alt="good-job-logo"/>
        </div>
    )
}
export default translate()(Result);