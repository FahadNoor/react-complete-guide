import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [data, setData] = useState({ title: "", amount: 0, date: "" });

  const titleChangeHandler = (event) => {
    setData((prevData) => {
      return { ...prevData, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setData((prevData) => {
      return { ...prevData, amount: +event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setData((prevData) => {
      return {
        ...prevData,
        date: event.target.valueAsDate.toISOString().split("T")[0],
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onFormSubmit({ ...data, date: new Date(data.date) });
    setData({ title: "", amount: 0, date: "" });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={data.title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={data.amount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={data.date.toString()}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
