import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  const [isMouseOver, setMouseOver] = useState(false);

  const [name, setName] = useState("");

  const [lName, setlName] = useState("");

  function handleClick() {
    setHeadingText("Nice to meet you ");
    setName(name + " ");
    setlName(lName + "!");
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange() {
    setName(event.target.value);
  }
  function handleChange1() {
    setlName(event.target.value);
  }

  //const [fullName, setFullName] = useState({
  //fName: "",
  //lName: ""
  //});

  //function handleChange(event) {
  //  const { value, name } = event.target;

  //  setFullName((prevValue) => {
  //    if (name === "fName") {
  //      return {
  //        fName: value,
  //        lName: prevValue.lName
  //    };
  //} else if (name === "lName") {
  //return {
  // fName: prevValue.fName,
  //lName: value
  // };
  //}
  //});
  //}

  return (
    <div className="container">
      <h1>
        {headingText} {name} {lName}
        {/*Hello {fullName.fName} {fullName.lName}*/}
      </h1>
      <form onSubmit={handleChange}>
        <br />
        <input
          name="fName"
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          //value={fullName.fName}
          value={name}
        />
        <input
          name="lName"
          onChange={handleChange1}
          type="text"
          placeholder="What about your last name?"
          //value={fullName.lName}
          value={lName}
        />
        <button
          type="submit"
          style={{
            backgroundColor: isMouseOver ? "black" : "white",
            color: isMouseOver ? "white" : "black"
          }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
