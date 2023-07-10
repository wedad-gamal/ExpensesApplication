import React from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

function ExpenseItem(props){

    let params = props.itemData;
    if(params !== undefined)
    {
        return (
        <div className="expense-item">
        <ExpenseDate date={params.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{params.title}</h2>
                <div className="expense-item__price">${params.amount}</div>
            </div>
        </div>
        );
    }
}

export default ExpenseItem;