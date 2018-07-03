import React, {Component} from 'react';
import Modal from '../Common/Modal';
import EmailInput from '../Common/EmailInput';
import NameInput from '../Common/NameInput';
import PhoneInput from '../Common/PhoneInput';
import CourseInput from '../Common/CourseInput';
import Result from '../Common/Result';
import { onCreateTemplate } from '../../pdfs/HTMLPDFtransformer';
import { translate } from "react-i18next";
import closeIcon from '../../assets/close-icon.png';
import '../../styles/ModalInfo.css';
import { onPostData } from '../../firebaseConfig';
import { connect } from 'react-firebase';

class ModalInfo extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        course: '',
        showResult: false
    };

    onCreatePDFHTML = (courseName) => onCreateTemplate(courseName);
    onUserNameChange = (event) => this.setState({name: event.target.value, course: this.props.courseTitle});
    onEmailChange = (event) => this.setState({email: event.target.value});
    onPhoneNumberChange = (event) => this.setState({phone: event.target.value});
    onCourseChange = () => this.setState({course: this.props.courseTitle});
    onSubmitData = () => {
        const { name, email, phone, course } = this.state, data = { name, email, phone, course };
        onPostData(data);
        this.setState({showResult: true});
    };

    render() {
        const { name, email, phone, showResult } = this.state,
              { t, isClosed, isOpen, courseTitle } = this.props;
        return (
            <Modal show={isOpen}>
                <div className='modalData'>
                    <h1>{t('modalTitle')}</h1>
                    <img src={closeIcon} alt="close_icon" className='closeButtonInfo' onClick={isClosed} />
                    <div className='totalBlock'>
                        <div className='formInfo'>
                            {showResult ?
                                <Result /> :
                                <form onSubmit={this.onSubmitData}>
                                    <CourseInput onCourseChanged={this.onCourseChange} value={courseTitle} />
                                    <NameInput onNameChanged={this.onUserNameChange} value={name} />
                                    <EmailInput onEmailChanged={this.onEmailChange} value={email} />
                                    <PhoneInput onPhoneChanged={this.onPhoneNumberChange} value={phone} />
                                    <button type='submit' className='submitButton'>{t('submitButton')}</button>
                                </form>
                            }
                        </div>
                        <div className='downloadInfo'>
                            <div>{t('downloadTextPreview')}</div>
                            <button className='submitButton'
                                    onClick={() => this.onCreatePDFHTML(courseTitle)}>
                                {t('downloadButton')}
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}
export default connect()(translate()(ModalInfo));