export interface ListItemDataType  {
    amount: number | string;
    title: string;
    transaction: "Income" | "Expense" | string;
}

export interface RegistrationFormDataType {
    currency: string;
    first_name: string;
    gender: string;
    initial_deposit: number | string;
    last_name: string;
}

export interface TransactionFormDataType {
    amount: number | string;
    title: string;
    transaction: "Expense" | "Income" | string; 
}