import { createContext } from "react";
import {
  RegistrationFormDataType,
  TransactionFormDataType,
} from "../types/dataTypes";

export interface UserContextType {
  formData: RegistrationFormDataType;
  isLogged: boolean;
  setFormData: React.Dispatch<React.SetStateAction<RegistrationFormDataType>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setTransaction: React.Dispatch<
    React.SetStateAction<TransactionFormDataType[]>
  >;
  transaction: TransactionFormDataType[];
}

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
