import React from 'react';
import { translate } from "react-i18next";

function NameInput(props) {
    const { t, value, onNameChanged } = props;
    return (
        <div>
            <label>{t('moreInfoName')}:
                <input type="text"
                       className='question'
                       placeholder={t('namePlaceholder')}
                       autoComplete='off'
                       value={value}
                       onChange={onNameChanged}
                       name="name" required />
            </label>
        </div>
    )
}
export default translate()(NameInput);