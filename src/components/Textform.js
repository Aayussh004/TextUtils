import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked: " +  text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    setText(event.target.value);
  };

  // Credits: A
  const handleCopy = () => {
    console.log("I am copy");
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  // text = "new text"; // Wrong way to change the state
  // setText("new text"); // Correct way to change the state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

// import { useEffect, useState } from "react";
// import React from "react";

// export default function Texform(props) {
//   const [text, settext] = useState("enter the text here2"); //this hook will take two parameters, first one is variable along with intial given value and second is a function and whenever you want to change the value of a variable just use that function not variable directly

//   const handleonchange = (event) => {
//     // console.log("here you change the text");
//     settext(event.target.value);
//   };

//   const handleupperclick = () => {
//     console.log("to uppercase");
//     let newtext = text.toUpperCase();
//     console.log(newtext);
//     settext(newtext);
//   };

//   const handlelowerclick = () => {
//     // console.log("to uppercase");
//     let newtext = text.toLowerCase();
//     // console.log(newtext);
//     settext(newtext);
//   };

//   useEffect(() => {
//     settext("");
//   }, []);

//   return (
//     <>
//       <div>
//         <div
//           className="mb-3"
//           style={{ color: props.mode === "dark" ? "white" : "black" }}
//         >
//           <h1>{props.heading}</h1>
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">
//             {" "}
//           </label>
//           <textarea
//             className="form-control"
//             value={text}
//             onChange={handleonchange}
//             id="exampleFormControlTextarea1"
//             rows="10"
//             onClick={useEffect}
//           ></textarea>
//         </div>
//         <button className="btn btn-primary mx-2" onClick={handleupperclick}>
//           Uppercase
//         </button>

//         <button className="btn btn-primary mx-2" onClick={handlelowerclick}>
//           Lowercase
//         </button>
//       </div>

//       <div className="container">
//         <h1>Your text summary</h1>
//         <p>
//           Number of words {text.split(" ").length}, number of characters{" "}
//           {text.length}
//         </p>
//         <p>estimated time to read is {0.008 * text.split(" ").length}</p>
//         <h2>Preview</h2>
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }
