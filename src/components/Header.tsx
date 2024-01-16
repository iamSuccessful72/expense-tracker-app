import { useContext } from "react";
import UserContext, { UserContextType } from "./User";

function Header() {
  const { formData, isLogged } = useContext(UserContext) as UserContextType;

  return (
    <header>
      <h1 className="font-bold font-Lato my-2 text-right">
        {isLogged
          ? `Welcome ${formData.gender === "female" ? "Mrs" : "Mr"} ${
              formData.first_name.slice(0, 1).toUpperCase() +
              formData.first_name.slice(1).toLowerCase()
            }`
          : "Expense Tracker"}
      </h1>
    </header>
  );
}

export default Header;
