import NavBar from "./Components/NavBar";
import Alert from "./Components/Alert";
import MainBody from "./Components/MainBody";
import { useState } from "react";
// import About from "./Components/About";
// import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Routing not support on github pages that 's why i comment it.

function App() {
  // HOOK : useState  =>  use to change the Mode.
  const [Mode, setMode] = useState("light");
  const [AlertNotify, setAlertNotify] = useState(null);

  // showAlert function: use to show alert below navbar.
  const showAlert = (type, message) => {
    setAlertNotify({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      setAlertNotify(null);
    }, 1500);
  };

  // Dark mode functionality: of Navbar
  const changeBg = () => {
    // console.log("changeBg clicked " + Mode);

    if (Mode === "light") {
      showAlert("success", "Dark Mode is Enabled");
      setMode("dark");
      document.body.style.background = "#404041"
    } else {
      showAlert("success", "Light Mode is Enabled");
      setMode("light");
      document.body.style.background = `rgb(248 249 250)`
    }
  };

  return (
    <>
      {/* <Router> */}
      <NavBar title="Text Changer" changeBg={changeBg} Mode={Mode} />
      <Alert alert={AlertNotify} />
      {/* <Switch>
          <Route exact path="/"> */}
      <MainBody Mode={Mode} showAlert={showAlert} />
      {/* </Route>
          <Route exact path="/about"><About Mode={Mode} /></Route>
      </Switch>
    </Router> */}
    </>
  );
}

export default App;
