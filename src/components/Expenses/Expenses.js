import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import { useState } from 'react';

function Expenses(props) {
  const [year, setYear] = useState('2020');
  const yearChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((exp) => {
    return exp.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onYearChange={yearChangeHandler} selected={year} />
      <ExpensesChart items={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
