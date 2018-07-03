import React from 'react';
import { emailValidation } from '../../validation/emailValidator';
import { translate } from "react-i18next";

function EmailInput(props) {
    const { t, value, onEmailChanged } = props;
    return (
        <div>
            <label>{t('moreInfoEmail')}:
                <input type="email"
                       placeholder={t('emailPlaceholder')}
                       autoComplete='off'
                       value={value}
                       onChange={onEmailChanged}
                       name="email" required />
                </label>
                <div className='emailError'>
                    {value && emailValidation(value)}
                </div>
            </div>
        )
}
export default translate()(EmailInput);