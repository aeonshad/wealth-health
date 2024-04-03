import { useState } from 'react';
import { departmentList } from '../../data/departments';
import { statesList } from '../../data/states';
import EmployeeService from '../../services/employee-service';
function Form() {
    //const [isForm, setIsForm] = useState(false);
    const [form, setForm] = useState({
        firstName: { value: '' },
        lastName: { value: '' },
        birthDate: { value: '' },
        startDate: { value: '' },
        street: { value: '' },
        city: { value: '' },
        state: { value: statesList[0].abbreviation },
        zipCode: { value: '' },
        department: { value: departmentList[0].departmentName },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        EmployeeService.add(form);
    };

    return (
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <label className="form-label" htmlFor="firstName">
                First Name
            </label>
            <input
                type="text"
                className="form-input"
                id="firstName"
                value={form.firstName.value}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        firstName: { value: e.target.value },
                    }))
                }
            />
            <label className="form-label" htmlFor="lastName">
                Last Name
            </label>
            <input
                type="text"
                className="form-input"
                id="lastName"
                value={form.lastName.value}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        lastName: { value: e.target.value },
                    }))
                }
            />
            <label className="form-label" htmlFor="birthDate">
                Date of Birth
            </label>
            <input
                type="date"
                className="form-input"
                id="birthDate"
                value={form.birthDate.value}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        birthDate: { value: e.target.value },
                    }))
                }
            />
            <label className="form-label" htmlFor="startDate">
                Start Date
            </label>
            <input
                type="date"
                className="form-input"
                id="startDate"
                value={form.startDate.value}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        startDate: { value: e.target.value },
                    }))
                }
            />
            <fieldset className="form-fieldset">
                <legend className="form-fieldset-legend">Address</legend>
                <label className="form-label" htmlFor="street">
                    Street
                </label>
                <input
                    type="text"
                    className="form-input"
                    id="street"
                    value={form.street.value}
                    onChange={(e) =>
                        setForm((form) => ({
                            ...form,
                            street: { value: e.target.value },
                        }))
                    }
                />
                <label className="form-label" htmlFor="city">
                    City
                </label>
                <input
                    type="text"
                    className="form-input"
                    id="city"
                    value={form.city.value}
                    onChange={(e) =>
                        setForm((form) => ({
                            ...form,
                            city: { value: e.target.value },
                        }))
                    }
                />
                <label className="form-label" htmlFor="state">
                    State
                </label>
                <select
                    name="state"
                    className="form-input"
                    id="state"
                    value={form.state.value}
                    onChange={(e) =>
                        setForm((form) => ({
                            ...form,
                            state: { value: e.target.value },
                        }))
                    }
                >
                    {statesList.map(({ name, abbreviation }, index) => (
                        <option value={abbreviation} key={index}>
                            {name}
                        </option>
                    ))}
                </select>
                <label className="form-label" htmlFor="zipCode">
                    Zip Code
                </label>
                <input
                    type="text"
                    className="form-input"
                    id="zipCode"
                    value={form.zipCode.value}
                    onChange={(e) =>
                        setForm((form) => ({
                            ...form,
                            zipCode: { value: e.target.value },
                        }))
                    }
                />
            </fieldset>
            <label className="form-label" htmlFor="department">
                Department
            </label>
            <select
                name="department"
                className="form-input"
                id="department"
                value={form.department.value}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        department: { value: e.target.value },
                    }))
                }
            >
                {departmentList.map(({ departmentName }, index) => (
                    <option key={index}>{departmentName}</option>
                ))}
            </select>
            <button type="submit" className="form-button">
                Save
            </button>
        </form>
    );
}

export default Form;
