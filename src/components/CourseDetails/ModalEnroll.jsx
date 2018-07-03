import React, {Component} from 'react';
import Modal from '../Common/Modal';
import '../../styles/ModalEnroll.css';
import { translate } from "react-i18next";
import closeIcon from '../../assets/close-icon.png';
import EmailInput from '../Common/EmailInput';
import NameInput from '../Common/NameInput';
import PhoneInput from '../Common/PhoneInput';
import CourseInput from '../Common/CourseInput';
import Result from '../Common/Result';
import { onPostData } from '../../firebaseConfig';
import { connect } from 'react-firebase';

class ModalEnroll extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        course: '',
        wishes: '',
        showResult: false
    };

    onWishesChange = (event) => this.setState({wishes: event.target.value});
    onUserNameChange = (event) => this.setState({name: event.target.value, course: this.props.courseTitle});
    onEmailChange = (event) => this.setState({email: event.target.value});
    onPhoneNumberChange = (event) => this.setState({phone: event.target.value});
    onCourseChange = () => this.setState({course: this.props.courseTitle});
    onSubmitData = () => {
        const { name, email, phone, course, wishes } = this.state, data = { name, email, phone, course, wishes };
        onPostData(data);
        this.setState({showResult: true});
    };

    render() {
        const { wishes, name, email, phone, showResult } = this.state, { t, isClosed, isOpen, courseTitle } = this.props;
        return (
            <Modal show={isOpen}>
                <div className='modalEnrollData'>
                    <h1>{t('enrollTitle')}</h1>
                    <img src={closeIcon} alt="close_icon" className='closeButtonEnroll' onClick={isClosed} />
                    {showResult ?
                        <Result /> :
                    <form className='formEnroll' onSubmit={this.onSubmitData}>
                        <CourseInput onCourseChanged={this.onCourseChange} value={courseTitle} />
                        <NameInput onNameChanged={this.onUserNameChange} value={name} />
                        <EmailInput onEmailChanged={this.onEmailChange} value={email} />
                        <PhoneInput onPhoneChanged={this.onPhoneNumberChange} value={phone} />
                        <label>{t('enrollComments')}:
                            <textarea
                                placeholder={t('enrollPlaceholder')}
                                value={wishes}
                                onChange={this.onWishesChange}
                                type="text"
                                name="wishes" />
                        </label>
                        <button type='submit'
                                className='submitButton'>{t('enroll')}</button>
                    </form>}
                </div>
            </Modal>
        )
    }
}
export default connect()(translate()(ModalEnroll));