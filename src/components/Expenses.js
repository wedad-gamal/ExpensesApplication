import React from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';

function Expenses(props){
    let params = props.expensesData;
    return (
        
        <div className='expenses'>
            
            <ExpenseItem itemData={params[0]}></ExpenseItem>
            <ExpenseItem itemData={params[1]}></ExpenseItem>
            <ExpenseItem itemData={params[2]}></ExpenseItem>
        
        </div>
        

    );
}

export default Expenses;