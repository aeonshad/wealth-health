import { configureStore, createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employees.push(action.payload);
        },
        removeEmployee: (state, action) => {
            console.log(`action.payload = ${action.payload}`);

            state.employees.splice(action.payload, 1);
        },
    },
});

const store = configureStore({ reducer: employeeSlice.reducer });

export default store;
