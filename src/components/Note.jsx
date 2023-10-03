import React from "react";

function Note(props) {
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;



  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <p className="new-date">{currentDate}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
