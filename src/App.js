import Header from "./component/layout/header";
import Meals from "./component/Meals/Meals";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
