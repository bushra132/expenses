import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate expenseDate={props.expenseDate} />
        <div className="expense-item__descripthion">
          <h2>{props.expenseTitle}</h2>
          <div className="expense-item__price">${props.expenseAmount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
