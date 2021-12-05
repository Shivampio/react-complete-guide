import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter"

import './Expenses.css'
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses=(props)=> {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  

  return (
    <li>
    <Card className="expenses">
      <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* {filteredExpenses.length === 0 ?( <p>No Records found.</p>):(filteredExpenses.map((expense)=>(
         <ExpenseItem
         key={expense.id}
         title={expense.title}
         amount={expense.amount}
         date={expense.date}
       />
      )))} */}

      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </li>
  );
}

export default Expenses;
