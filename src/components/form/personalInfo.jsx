import DatePicker from "react-date-picker";

function PersonalInfo({ form, setForm }) {
    const dateFormat = (e) => {
        setForm((form) => ({
            ...form,
            birthDate: e.toLocaleDateString('en-EN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }),
        }
        ));
    };
    return (
        <div className="form-section">
            <label className="form-label" htmlFor="firstName">
                First Name
            </label>
            <input
                type="text"
                className="form-input"
                id="firstName"
                value={form.firstName}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        firstName: e.target.value,
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
                value={form.lastName}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        lastName: e.target.value,
                    }))
                }
            />
            <label className="form-label" htmlFor="startDate">
                Birthday
            </label>
            <DatePicker
                value={form.birthDate}
                className="form-input"
                onChange={dateFormat}
                format="dd/MM/yyyy"
                dayPlaceholder="dd"
                monthPlaceholder="mm"
                yearPlaceholder="yyyy"
            />
        </div>
    );
}

export default PersonalInfo;
