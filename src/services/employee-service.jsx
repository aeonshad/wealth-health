import store from '../app/store';

class EmployeeService {
    static add(formData) {
        store.dispatch({ type: 'employee/addEmployee', payload: formData });
    }
    static delete(index) {
        store.dispatch({ type: 'employee/removeEmployee', payload: index });
    }
}

export default EmployeeService;
