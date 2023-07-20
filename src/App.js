import Header from "./component/layout/header";
import Meals from "./component/Meals/Meals";
import Card from "./component/Cart/Cart";
import { useState } from "react";
import { Fragment } from "react";
function App() {
  const [cardshow, setcardshow] = useState(false);
  const showcard = () => {
    setcardshow(true);
  };
  const hidecard = () => {
    setcardshow(false);
  };

  return (
    <Fragment>
      <Card></Card>
      <Header></Header>
      <Meals></Meals>
    </Fragment>
  );
}

export default App;
