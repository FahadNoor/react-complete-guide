import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

function NewExpense(props) {
    const [isEditing, setIsEditing] = useState(false);

    const formSubmitHandler = (data) => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };
        props.onExpenseAdd(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
            {isEditing && <ExpenseForm onFormSubmit={formSubmitHandler} onCancel={stopEditingHandler} />}
        </div>
    );
}

export default NewExpense;