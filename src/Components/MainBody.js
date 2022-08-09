import React from "react";
import { useState } from "react";

export default function MainBody(props) {
  // Variables :
  const textArea = document.getElementById("textAreaBox");

  //  HOOK : useState
  const [text, setText] = useState("");

  // onChangeHandler function : help to enter the text in textarea by typing.
  const onChangeHandler = (e) => {
    setText(e.target.value);
    // console.log(e.target.value);
  };

  // toUpperCaseHandler function : use to change text into upperCase.
  const toUpperCaseHandler = () => {
    const txt = textArea.value.toUpperCase();
    setText(txt);
    props.showAlert("success", "Converted to Upper Case");
    // console.log(txt);
  };

  // toLowerCaseHandler function : use to change text into lowerCase.
  const toLowerCaseHandler = () => {
    const txt = textArea.value.toLowerCase();
    setText(txt);
    props.showAlert("success", "Converted to Lower Case");
    // console.log(txt);
  };

  // copyText function : use to copy the text.
  const copyText = () => {
    const area = document.getElementById("textAreaBox");
    // console.log(area.value);
    area.select();
    // copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(area.value);
    document.getSelection().removeAllRanges();
    props.showAlert("success", "Copied to Clipboard");
  };

  // clearText function : use to clear the text.
  const clearText = () => {
    setText("");
    props.showAlert("success", "Text cleared");
    // console.log(txt);
  };

  // handlerRemoveSpace function : use to remove extra white space.
  const handlerRemoveSpace = () => {
    let textValue = textArea.value;
    setText(textValue.replace(/\s+/g, " "));
  };

  return (
    <div
      className="pt-5"
      style={{
        backgroundColor: props.Mode === "dark" ? "#404041" : "#f8f9fa",
        width: "100%",
        height: "92vh",
      }}
    >
      <div className="py-2">
        <div
          className={`container my-3`}
          id="bodyMode"
          style={{ color: props.Mode === "light" ? "black" : "white" }}
        >
          <h2>Enter The Text To Analize Below</h2>
          <textarea
            className={`form-control`}
            style={{
              backgroundColor: props.Mode === "dark" ? "#404041" : "white",
              color: props.Mode === "light" ? "black" : "white",
            }}
            id="textAreaBox"
            value={text}
            rows="9"
            onChange={onChangeHandler}
            placeholder="Enter here..."
          ></textarea>
          <div className="my-3">
            <button
              className={`btn btn-primary mx-1 my-1 ${text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length === 0
                  ? "disabled cur"
                  : "active"
                }`}
              onClick={toUpperCaseHandler}
            >
              Convert in UpperCase
            </button>
            <button
              className={`btn btn-primary mx-1 my-1 ${text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length === 0
                  ? "disabled"
                  : "active"
                }`}
              onClick={toLowerCaseHandler}
            >
              Convert in LowerCase
            </button>
            <button
              className={`btn btn-primary mx-1 my-1 ${text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length === 0
                  ? "disabled"
                  : "active"
                }`}
              onClick={copyText}
            >
              Copy the Text
            </button>
            <button
              className={`btn btn-primary mx-1 my-1 ${text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length === 0
                  ? "disabled"
                  : "active"
                }`}
              onClick={clearText}
              disable="true"
            >
              Clear Text
            </button>
            <button
              className={`btn btn-primary mx-1 my-1 ${text.split(" ").filter((ele) => {
                return ele.length !== 0;
              }).length === 0
                  ? "disabled"
                  : "active"
                }`}
              onClick={handlerRemoveSpace}
              disable="true"
            >
              Remove Extra Space
            </button>
          </div>
        </div>

        <div className={`container`}>
          <table
            className="table"
            style={{ color: props.Mode === "light" ? "black" : "white" }}
          >
            <thead>
              <tr>
                <th scope="col">
                  <h2>MoreDetails</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Words</th>
                <td>
                  {
                    text.split(/\s/g).filter((ele) => {
                      return ele.length !== 0;
                    }).length
                  }
                </td>
              </tr>
              <tr>
                <th scope="row">Characters</th>
                <td>{text.length}</td>
              </tr>
              <tr>
                <th scope="row">Characters (without space)</th>
                <td>{text.replace(/\s/g, "").length}</td>
              </tr>
              <tr>
                <th scope="row">Reading time</th>
                <td>
                  {(0.192 *text.split(" ").filter((ele) => {  return ele.length !== 0;}).length).toPrecision(2)}{" "}sec
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
