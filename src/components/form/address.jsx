import Select from 'react-dropdown-select';

function Address({ form, setForm, statesList }) {
    return (
        <div className="form-section">
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
                        street: e.target.value,
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
                value={form.city}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        city: e.target.value,
                    }))
                }
            />
            <label className="form-label" htmlFor="state">
                State
            </label>
            <Select
                options={statesList}
                valueField="abbreviation"
                labelField="name"
                value={form.state}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        state: e[0].abbreviation,
                    }))
                }
            />
            <label className="form-label" htmlFor="zipCode">
                Zip Code
            </label>
            <input
                type="text"
                className="form-input"
                id="zipCode"
                value={form.zipCode}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        zipCode: e.target.value,
                    }))
                }
            />
        </div>
    );
}

export default Address;
