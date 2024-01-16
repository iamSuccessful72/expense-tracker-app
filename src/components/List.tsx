import { useContext } from "react";
import ListItem from "./ListItem";
import UserContext, { UserContextType } from "./User";

function List() {
  const { setIsLogged, setFormData, setTransaction, transaction } = useContext(
    UserContext
  ) as UserContextType;

  return (
    <>
      {transaction.length ? (
        <>
          <h2 className="font-bold my-2 text-rock-blue">Transaction history</h2>
          <ul>
            {transaction.map((transaction, index) => (
              <ListItem
                key={index}
                listItem={{
                  amount: transaction.amount,
                  title: transaction.title,
                  transaction: transaction.transaction,
                }}
              />
            ))}
          </ul>
          <div className="md:flex justify-end my-4">
            <button
              className="bg-red-400 md:w-24 p-2 rounded-md text-zircon w-full"
              onClick={handleClick}
              type="button"
            >
              Reset
            </button>
          </div>
        </>
      ) : (
        <p className="text-red-400">
          You've not carried out any transaction!!!
        </p>
      )}
    </>
  );

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
    event;
    const confirmDelete: boolean = confirm(
      "Are you sure you wish to reset expense tracker ?"
    );
    if (confirmDelete) {
      setIsLogged(false);
      setFormData({
        currency: "",
        first_name: "",
        gender: "",
        initial_deposit: "",
        last_name: "",
      });
      setTransaction([]);
    }
  }
}

export default List;
