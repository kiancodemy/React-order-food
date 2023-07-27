import { createContext } from "react";
import { useReducer } from "react";
const defaultt = { items: [], totalamout: 0 };
const cartreducer = (state, action) => {
  if (action.type === "add") {
    const updateamount =
      state.totalamout + action.item.price * action.item.amount;

    const index = state.items.findIndex((item) => item.id === action.item.id);
    let updateditem;
    let updateditems;
    const existingitem = state.items[index];
    if (existingitem) {
      updateditem = {
        ...existingitem,
        amount: existingitem.amount + action.item.amount,
      };
      updateditems = [...state.items];
      updateditems[index] = updateditem;
    } else {
      updateditem = { ...action.item };
      updateditems = state.items.concat(updateditem);
    }

    return { items: updateditems, totalamout: updateamount };
  }
  if (action.type === "remove") {
    const existingitem = state.items.findIndex((item) => item.id === action.id);
    const existingcard = state.items[existingitem];
  }
};
export const Book = createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(cartreducer, defaultt);
  const additems = (items) => {
    dispatch({ type: "add", item: items });
  };
  const removeitems = (id) => {
    dispatch({ type: "remove", id: id });
  };
  const value = {
    items: state.items,
    totalamout: state.totalamout,
    add: additems,
    remove: removeitems,
  };
  return <Book.Provider value={value}>{children}</Book.Provider>;
};
export { Provider };
