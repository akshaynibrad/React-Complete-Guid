import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;

// Or We Can Handle By Following Way
// const ExpenseList = (props) => {
//   // Data To Show On List
//   let expensesContent = (
//     <h2 className="expenses-list__fallback">No Expense Found</h2>
//   );

//   if (props.items.length > 0) {
//     expensesContent = props.items.map((expense) => (
//       <ExpenseItem
//         key={expense.id}
//         title={expense.title}
//         amount={expense.amount}
//         date={expense.date}
//       />
//     ));
//   }

//   return (
//     <ul className="expenses-list">
//       {expensesContent}
//       {/* Below Are Different Way To Handle Data */}
//       {/* {filteredExpenses.length === 0 && <p>No Expense Found</p>} */}
//       {/* {filteredExpenses.length === 0 ? (
//           <p>No Expense Found</p>
//         ) : (
//           filteredExpenses.map((expense) => (
//             <ExpenseItem
//               key={expense.id}
//               title={expense.title}
//               amount={expense.amount}
//               date={expense.date}
//             />
//           ))
//         )} */}
//     </ul>
//   );
// };
