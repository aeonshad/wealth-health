import DatePicker from 'react-date-picker';
import Select from 'react-dropdown-select';

function Employment({ form, setForm, departmentList }) {

    const dateFormat = (e) => {
        setForm((form) => ({
            ...form,
            startDate:
                e.toLocaleDateString('en-EN', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                }),
        }
        ));
    };

    return (
        <div className="form-section">
            <label className="form-label" htmlFor="startDate">
                Start Date
            </label>
            <DatePicker
                value={form.startDate}
                onChange={dateFormat}
                className="form-input"
                format="dd/MM/yyyy"
                dayPlaceholder="dd"
                monthPlaceholder="mm"
                yearPlaceholder="yyyy"
            />
            <label className="form-label" htmlFor="department">
                Department
            </label>
            <Select
                options={departmentList}
                valueField="id"
                labelField="departmentName"
                value={form.department}
                onChange={(e) =>
                    setForm((form) => ({
                        ...form,
                        department: e[0].departmentName,
                    }))
                }
            />
        </div>
    );
}

export default Employment;
