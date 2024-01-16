import { useContext } from "react";
import { currencyConverter, decimalPlace } from "../functions/functions";
import UserContext, { UserContextType } from "./User";

function Dashboard() {
  const { formData, transaction } = useContext(UserContext) as UserContextType;

  const totalExpense = transaction
    .filter((transaction) => {
      if (transaction.transaction === "Expense") {
        return transaction;
      }
    })
    .reduce((total, currentValue) => {
      return +total + +currentValue.amount;
    }, 0);

  const totalIncome = transaction
    .filter((transaction) => {
      if (transaction.transaction === "Income") {
        return transaction;
      }
    })
    .reduce((total, currentValue) => {
      return +total + +currentValue.amount;
    }, 0);

  const income: number = totalIncome + +formData.initial_deposit;
  const balance: number = income - totalExpense;

  return (
    <div className="my-2">
      <h2 className="font-bold font-Lato">Your balance</h2>
      <p
        className={`font-bold ${
          balance < 0 ? "text-red-400" : "text-azure-radiance"
        } text-2xl`}
      >{`${currencyConverter(formData.currency) + decimalPlace(balance)}`}</p>
      <div className="flex gap-2 my-2">
        <div className="basis-2/4 bg-zircon border p-4 rounded-md text-center">
          <h3 className="font-bold text-rock-blue">Income</h3>
          <p className="font-bold text-2xl text-green-400">
            {`${currencyConverter(formData.currency) + decimalPlace(income)}`}
          </p>
        </div>
        <div className="basis-2/4 bg-zircon border p-4 rounded-md text-center">
          <h3 className="font-bold text-rock-blue">Expense</h3>
          <p className="font-bold text-2xl text-red-400">{`${
            currencyConverter(formData.currency) + decimalPlace(+totalExpense)
          }`}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
