import { createContext } from "react";
import { useReducer } from "react";
const defaultt = { items: [], totalamout: 0 };
const cartreducer = (state, action) => {
  if (action.type === "add") {
    const updateitem = state.items.concat(action.item);
    const updateamount =
      state.totalamout + action.item.price * action.item.amount;
    return { items: updateitem, totalamout: updateamount };
  }
  if (action.type === "remove") {
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
