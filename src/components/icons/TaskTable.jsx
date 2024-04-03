const { useReactTable, getCoreRowModel, flexRender } = require('@tanstack/react-table');
const { useState } = require('react');
const { employees } = require('../../data/employees');

const columns = [
    {
        accessorKey: 'firstName',
        header: 'FirstName',
        cells: (props) => <p>{props.getValue}</p>,
    },
    {
        accessorKey: 'lastName',
        header: 'LastName',
        cells: (props) => <p>{props.getValue}</p>,
    },
    {
        accessorKey: 'dateOfBirth',
        header: 'Birth',
        cells: (props) => <p>{props.getValue}</p>,
    },
    {
        accessorKey: 'startDate',
        header: 'StatDate',
        cells: (props) => <p>{props.getValue}</p>,
    },
    {
        accessorKey: 'street',
        header: 'Street',
        cells: (props) => <p>{props.getValue}</p>,
    },
    {
        accessorKey: 'city',
        header: 'City',
        cells: (props) => <p>{props.getValue}</p>,
    },
    {
        accessorKey: 'state',
        header: 'State',
        cells: (props) => <p>{props.getValue}</p>,
    },
    {
        accessorKey: 'zipCode',
        header: 'ZipCode',
        cells: (props) => <p>{props.getValue}</p>,
    },
    {
        accessorKey: 'department',
        header: 'Department',
        cells: (props) => <p>{props.getValue}</p>,
    },
];

const TaskTable = () => {
    const [data, setData] = useState(employees);
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
    return (
        <table>
            {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <th key={header.id}>{header.column.columnDef.header}</th>
                    ))}
                </tr>
            ))}
            {table.getExpandedRowModel().rows.map((row) => (
                <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                    ))}
                </tr>
            ))}
        </table>
    );
};
export default TaskTable;
