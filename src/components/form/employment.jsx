import Select from 'react-dropdown-select';

function Employment({ form, setForm, departmentList }) {
    return (
        <div className="form-section">
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
            <label className="form-label" htmlFor="department">
                Department
            </label>
            <Select
                options={departmentList}
                valueField="id"
                labelField="departmentName"
                value={form.department.value}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        department: { value: e[0].departmentName },
                    }))
                }
            />
        </div>
    );
}

export default Employment;
