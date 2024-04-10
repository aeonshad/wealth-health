import { useState } from 'react';
import { departmentList } from '../../data/departments';
import { statesList } from '../../data/states';
import PersonalInfo from './personalInfo';
import Address from './address';
import Employment from './employment';
import EmployeeService from '../../services/employee-service';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import Modal from '../../pages/modal';

function Form() {
    const [page, setPage] = useState(0);
    const formTitle = ['Personal Information', 'Address', 'Employment'];

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        birthDate: '',
        startDate: '',
        street: '',
        city: '',
        state: statesList[0].abbreviation,
        zipCode: '',
        department: departmentList[0].departmentName,
    });

    const pageDisplay = () => {
        if (page === 0) {
            return <PersonalInfo form={form} setForm={setForm} />;
        } else if (page === 1) {
            return <Address form={form} setForm={setForm} statesList={statesList} />;
        } else {
            return <Employment form={form} setForm={setForm} departmentList={departmentList} />;
        }
    };

    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        EmployeeService.add(form);
        toggleModal();
    };

    return (
        <div>
            <h1 className="form-title">{formTitle[page]}</h1>
            <h2>
                {page + 1}/{formTitle.length}
            </h2>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <ul>
                    {pageDisplay()}
                    {page === 0 ? (
                        ''
                    ) : (
                        <button
                            className="form-button"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage((currPage) => currPage - 1);
                            }}
                        >
                            Back
                        </button>
                    )}
                    {page === formTitle.length - 1 ? (
                        <li>
                            <button type="submit" className="form-button">
                                Save
                            </button>
                        </li>
                    ) : (
                        <li>
                            <button
                                className="form-button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setPage((currPage) => currPage + 1);
                                }}
                            >
                                Next
                            </button>
                        </li>
                    )}
                </ul>
            </form>
            <Modal isOpen={showModal} onCloseModal={toggleModal} />
        </div>
    );
}

export default Form;
