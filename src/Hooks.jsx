import React, { useState } from "react";

function Hook() {
  let [name, setName] = useState("");
  return (
    <>
      <form action="">
        <label>Enter name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </form>
      <h1>The name is {name}</h1>
    </>
  );
}

export default Hook;
