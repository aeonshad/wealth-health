import DatePicker from 'react-date-picker';

function PersonalInfo({ form, setForm }) {
    const dateFormat = (e) => {
        setForm((form) => ({
            ...form,
            birthDate: {
                value: e.toLocaleDateString('en-EN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }),
            },
        }));
    };

    return (
        <div className="form-section">
            <li>
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
                <span>test</span>
            </li>
            <li>
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
                <span>test</span>
            </li>
            <li>
                <label className="form-label" htmlFor="lastName">
                    Birthday
                </label>
                <DatePicker
                    value={form.birthDate.value}
                    className="form-input"
                    onChange={dateFormat}
                    format="dd/MM/yyyy"
                    dayPlaceholder="dd"
                    monthPlaceholder="mm"
                    yearPlaceholder="yyyy"
                />
                <span>test</span>
            </li>
        </div>
    );
}

export default PersonalInfo;
