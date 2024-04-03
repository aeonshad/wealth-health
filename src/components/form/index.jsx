import { useState } from 'react';
import { departmentList } from '../../data/departments';
import { statesList } from '../../data/states';
import PersonalInfo from './personalInfo';
import Address from './address';
import Employment from './employment';
import EmployeeService from '../../services/employee-service';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        EmployeeService.add(form);
    };

    return (
        <div>
            <h1>{formTitle[page]}</h1>
            <h2>
                {page + 1}/{formTitle.length}
            </h2>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
                    <button type="submit" className="form-button">
                        Save
                    </button>
                ) : (
                    <button
                        className="form-button"
                        onClick={(e) => {
                            e.preventDefault();
                            setPage((currPage) => currPage + 1);
                        }}
                    >
                        Next
                    </button>
                )}
            </form>
        </div>
    );
}

export default Form;
