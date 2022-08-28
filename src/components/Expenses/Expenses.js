import { useState } from "react";

import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");

  let expenses = [];
  if (selectedYear) {
    expenses = props.items.filter(
      (item) => item.date.getFullYear().toString() === selectedYear
    );
  } else {
    expenses = props.items;
  }

  const expenseFilterHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={expenseFilterHandler} />
      <ExpenseChart expenses={expenses} />
      <ExpensesList items={expenses} />
    </Card>
  );
};

export default Expenses;
