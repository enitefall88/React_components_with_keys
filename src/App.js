import React, {useState} from "react";

let initialItems = ["Learn React", "Learn TypeScript"]

function App() {
  let [items, setItems] = useState(initialItems)
  function handleClick(event) {
  setItems([...items].reverse()) // items is copied Props in React should not be mutated
  }

 return <div className="p-3">
    <ul>
      {items.map((item ) =>
        <li key={item}>
          <label>
            <input type="checkbox"/>
            {" "}
            {item}
          </label>
        </li>
      )}
    </ul>
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      Reverse
    </button>
  </div>

}

export default App;
