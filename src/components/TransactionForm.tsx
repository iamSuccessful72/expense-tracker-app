import { useContext, useState } from "react";
import UserContext, { UserContextType } from "./User";
import { TransactionFormDataType } from "../types/dataTypes";

function TransactionForm() {
  const { setTransaction } = useContext(UserContext) as UserContextType;
  const [formData, setFormData] = useState({} as TransactionFormDataType);

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold font-Lato my-4">Add new transaction</h2>
      <div className="bg-zircon border p-4 rounded-md">
        <label htmlFor="title">
          Title
          <span className="text-red-400">*</span>
        </label>
        <input
          aria-placeholder="Should be at least 3 characters long"
          className="block border border-rock-blue my-2 p-2 rounded-md w-full"
          id="title"
          name="title"
          onChange={handleChange}
          pattern="([a-zA-Z]|[a-zA-Z]+\W){3,}"
          placeholder="Should be at least 3 characters long"
          required
          type="text"
          value={formData.title || ""}
        />
        <label htmlFor="amount">
          Amount
          <span className="text-red-400">*</span>
        </label>
        <input
          aria-placeholder="should be nothing less than 1"
          className="block border border-rock-blue my-2 p-2 rounded-md w-full"
          id="amount"
          min={1}
          name="amount"
          onChange={handleChange}
          placeholder="should be nothing less than 1"
          required
          type="number"
          value={formData.amount || ""}
        />
        <fieldset className="bg-white border border-rock-blue my-2 p-2 rounded-md">
          <legend>
            Transaction type <span className="text-red-400">*</span>
          </legend>
          <div>
            <label className="mr-2" htmlFor="income">
              Income
            </label>
            <input
              checked={formData.transaction === "Income"}
              className="align-middle"
              id="income"
              name="transaction"
              onChange={handleChange}
              type="radio"
              value="Income"
            />
          </div>
          <div>
            <label className="mr-2" htmlFor="expense">
              Expense
            </label>
            <input
              checked={formData.transaction === "Expense"}
              className="align-middle"
              id="expense"
              name="transaction"
              onChange={handleChange}
              type="radio"
              value="Expense"
            />
          </div>
        </fieldset>
        <div className="md:flex justify-end mt-4">
          <button
            className="bg-azure-radiance md:w-24 p-2 rounded-md text-zircon w-full"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const name: string = event.target.name;
    const value: string = event.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const transaction: TransactionFormDataType = {
      amount: formData.amount,
      title: formData.title,
      transaction: formData.transaction,
    };
    if (formData.amount && formData.title && formData.transaction) {
      setTransaction((prevState) => [transaction, ...prevState]);
      setFormData({
        amount: "",
        title: "",
        transaction: "",
      });
    }
  }
}

export default TransactionForm;
