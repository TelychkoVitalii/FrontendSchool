import React from 'react';
import { translate } from "react-i18next";

function PhoneInput(props) {
    const { t, phone, onPhoneChanged } = props;
    return (
        <div>
            <label>{t('moreInfoPhone')}:
                <input
                    type="tel"
                    placeholder={t('phonePlaceholder')}
                    value={phone}
                    onChange={onPhoneChanged}
                    name="phone" required/>
            </label>
        </div>
    )
}
export default translate()(PhoneInput);