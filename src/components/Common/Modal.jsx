import React from 'react';
import '../../styles/Modal.css';

function Modal(props) {
    if(!props.show) return null;

    return (
        <div className='backdropStyle'>
            {props.children}
        </div>
    );
}

export default Modal;