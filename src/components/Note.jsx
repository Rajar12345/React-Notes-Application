import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick} style={{ backgroundColor:'orange', color: 'red', border: '10px', borderRadius: '20%', padding: '6px 40px', cursor: 'pointer' }}>DELETE</button>
    </div>
  );
}

export default Note;
