import React from 'react';
import { ReactComponent as CheckIcon } from '../../assets/verified.svg';
import ModalComponent from 'react-component-hw';
import { Link } from 'react-router-dom';

function Modal({ isOpen, onCloseModal }) {
    return (
        <div>
            <ModalComponent isOpen={isOpen} onClose={onCloseModal}>
                <div className="modal-content">
                    <CheckIcon className="modal-img" />
                    <h1 className="modal-title">Success!</h1>
                    <p className="modal-text">the employee has been added</p>
                    <div className="modal-link-container">
                        <Link to={'/employee'} className="modal-link primary">
                            See employees
                        </Link>
                    </div>
                </div>
            </ModalComponent>
        </div>
    );
}

export default Modal;
