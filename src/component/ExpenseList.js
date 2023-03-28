import React from "react";
import './ExpenseList.css';
function ExpenseList() {
    const my={ expensedate:"2022-12-02",
               expenseAmt:295.5 ,
            expenseTitle:"carinsurance"}
    // const expensedate=new Date(22,12,2);
    // const expenseTitle='car insurance';
    // const expenseAmt=291.7;
  return (
    <div className="expense-item"> <h1> {my.expenseTitle}</h1>
    <div className="expense-item_price">  <h1> {my.expenseAmt}</h1></div>
    <div className="expense-item_description">  <h1> {my.expensedate}</h1> </div>
  
    </div>
    
    
  );
}
export default ExpenseList;
