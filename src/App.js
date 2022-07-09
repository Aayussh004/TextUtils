import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setTimeout(() => {
        showAlert("Dark mode has been enabled", "success");
      }, 2000);
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Textform heading="Enter the text to analyze below" mode={Mode} /> */}
        {/* <Switch> */}
        {/* /users --> Component 1
        /users/home --> Component 2 */}
        {/* <Route exact path="/about"> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route exact path="/"> */}
        <Textform
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={Mode}
        />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}
export default App;

// import "./App.css";
// import Navbar from "./components/Navbar";
// import TextForm from "./components/Textform";
// import React, { useState } from "react";
// // import About from "./components/About";
// import Alert from "./components/Alert";
// // import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// // import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

// function App() {
//   const [Mode, setMode] = useState("light"); // Whether dark mode is enabled or not
//   const [alert, setalert] = useState(null);

//   const showAlert = (message, type) => {
//     setalert({
//       msg: message,
//       type: type,
//     });
//   };

//   const toggleMode = () => {
//     if (Mode === "light") {
//       setMode("dark");
//       document.body.style.backgroundColor = "#042743";
//       showAlert("You have enabled dark mode", "success");
//       // document.body.style.color = "white";
//     } else {
//       setMode("light");
//       document.body.style.backgroundColor = "white";
//       showAlert("You have enabled light mode", "success");

//       // document.body.style.color = "black";
//     }
//   };
//   return (
//     <>
//       {/* <Navbar title="TextUtils" /> */}
//       {/* <Router> */}
//       <Navbar
//         title="TextUtils"
//         aboutText="About Us"
//         mode={Mode}
//         toggleMode={toggleMode}
//       />
//       <Alert alert="alert" />

//       <div className="container my-3">
//         {/* <TextForm heading="Enter the text to analyze below" /> */}

//         {/* <Switch> */}
//         {/* <Route path="/about"> */}
//         {/* <About /> */}
//         {/* </Route> */}
//         {/* <Route path="/"> */}
//         <TextForm heading="Enter the text to analyze below" mode={Mode} />
//         {/* </Route> */}
//         {/* </Switch> */}
//       </div>
//       {/* </Router> */}
//     </>
//   );
// }
// export default App;
