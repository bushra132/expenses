import './ExpenseDate.css';

function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
          props.expenseDate
        )}
      </div>
      <div className="expense-date__year">
        {props.expenseDate.getFullYear()}
      </div>
      <div className="expense-date__day">
        {new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(
          props.expenseDate
        )}
      </div>
    </div>
  );
}

export default ExpenseDate;
