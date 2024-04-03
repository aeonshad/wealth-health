import { useSelector } from 'react-redux';
import EmployeeDelete from '../../components/employee';
import Table from '../../components/table';

function EmployeeList() {
    const employees = useSelector((state) => state.employees);
    return <main className="main">{employees.length > 0 ? <Table /> : <p>vide</p>}</main>;
}
export default EmployeeList;
