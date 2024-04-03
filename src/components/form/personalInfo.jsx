function PersonalInfo({ form, setForm }) {
    return (
        <div className="form-section">
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
        </div>
    );
}

export default PersonalInfo;
