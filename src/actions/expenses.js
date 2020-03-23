import { uuid } from "uuidv4";

//expenses action generators functions
//adds expenses
export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//removes expenses from app object
export const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id
});

//edits expenses from app object
export const editExpense = (id, update) => ({
  type: "EDIT_EXPENSE",
  id,
  update
});
