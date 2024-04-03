import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { employeesTest } from '../../data/employees';
import { tableCustomStyles } from './tableCustomStyle';
import { useSelector } from 'react-redux';

function Table() {
    const employees = useSelector((state) => state.employees);

    const columns = [
        {
            selector: (row) => row.firstName,
            sortable: true,
            wrap: true,
            name: 'FirstName',
        },
        {
            selector: (row) => row.lastName,
            sortable: true,
            wrap: true,
            name: 'LastName',
        },
        {
            selector: (row) => row.dateOfBirth,
            sortable: true,
            wrap: true,
            name: 'Birth',
        },
        {
            selector: (row) => row.startDate,
            sortable: true,
            wrap: true,
            name: 'StatDate',
        },
        {
            selector: (row) => row.street,
            sortable: true,
            wrap: true,
            name: 'Street',
        },
        {
            selector: (row) => row.city,
            sortable: true,
            wrap: true,
            name: 'City',
        },
        {
            selector: (row) => row.state,
            sortable: true,
            wrap: true,
            name: 'State',
        },
        {
            selector: (row) => row.zipCode,
            sortable: true,
            wrap: true,
            name: 'ZipCode',
        },
        {
            selector: (row) => row.department,
            sortable: true,
            wrap: true,
            name: 'Department',
        },
        {
            cell: (row) => <button>Delete</button>,
            name: 'Action',
        },
    ];

    const [data, setData] = useState([]);
    const [search, SetSearch] = useState('');

    const getEmployee = () => {
        setData(employees);
    };

    useEffect(() => {
        getEmployee();
    }, []);



    useEffect(() => {
        if (search.length > 0) {
            const result = data.filter((item) => {
                return item.firstName.toLowerCase().match(search.toLocaleLowerCase());
            });
            setData(result);
        } else {
            getEmployee();
        }
    }, [search]);


    return (
        <DataTable
            columns={columns}
            data={data}
            customStyles={tableCustomStyles}
            pagination
            paginationRowsPerPageOptions={[10, 25, 50, 100]}
            fixedHeader
            highlightOnHover
            subHeader
            subHeaderComponent={<input type="text" placeholder="search..." value={search} onChange={(e) => SetSearch(e.target.value)}></input>}
        />
    );
}
export default Table;
