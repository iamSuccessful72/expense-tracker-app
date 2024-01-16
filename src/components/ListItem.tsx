import { decimalPlace, truncateString } from "../functions/functions";
import { ListItemDataType } from "../types/dataTypes";

function ListItem({ listItem }: { listItem: ListItemDataType }) {
  return (
    <li
      className={`bg-zircon border-r-4 ${
        listItem.transaction === "Expense"
          ? "border-r-red-400"
          : "border-green-400"
      } flex list-none my-2 px-2 py-4 rounded-md`}
    >
      <p className="basis-8/12">{truncateString(listItem.title)}</p>
      <p className="basis-4/12 text-right">{`${
        listItem.transaction === "Expense" ? "-" : "+"
      }${decimalPlace(+listItem.amount)}`}</p>
    </li>
  );
}

export default ListItem;
