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
            <Select
                options={statesList}
                valueField="abbreviation"
                labelField="name"
                value={form.state.value}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        state: { value: e[0].abbreviation },
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
                value={form.zipCode.value}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        zipCode: { value: e.target.value },
                    }))
                }
            />
        </div>
    );
}

export default Address;
