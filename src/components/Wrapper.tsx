import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import {
  RegistrationFormDataType,
  TransactionFormDataType,
} from "../types/dataTypes";
import UserContext from "./User";

function Wrapper() {
  const [formData, setFormData] = useState({} as RegistrationFormDataType);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<TransactionFormDataType[]>([]);

  return (
    <div className="font-Montserrat min-h-screen relative text-cod-gray w-full">
      <div className="2xl:w-8/12 lg:w-10/12 m-auto p-4">
        <UserContext.Provider
          value={{
            formData,
            isLogged,
            setFormData,
            setIsLogged,
            setTransaction,
            transaction,
          }}
        >
          <Header />
          <Main />
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default Wrapper;
