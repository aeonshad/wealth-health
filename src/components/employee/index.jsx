import EmployeeService from '../../services/employee-service';

function EmployeeDelete({ employee, index }) {
    const handleRemoveEmployee = (index) => {
        console.log(index);
        EmployeeService.delete(index);
    };
    return <button onClick={() => handleRemoveEmployee(index)}>Supprimer</button>;
}
export default EmployeeDelete;
