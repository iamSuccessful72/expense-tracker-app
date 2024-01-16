import { useContext } from "react";
import Dashboard from "./Dashboard";
import List from "./List";
import TransactionForm from "./TransactionForm";
import UserContext, { UserContextType } from "./User";
import RegistrationForm from "./RegistrationForm";

function Main() {
  const { isLogged } = useContext(UserContext) as UserContextType;

  return (
    <main>
      {isLogged ? (
        <>
          <Dashboard />
          <List />
          <TransactionForm />
        </>
      ) : (
        <RegistrationForm />
      )}
    </main>
  );
}

export default Main;
