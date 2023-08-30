import { useState, useRef, useMemo } from "react";

const App = () => {
  const inputRef = useRef();
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");

  const submit = (e) => {
    const value = inputRef.current.value;
    e.preventDefault();
    if (value != "") {
      setItems((prev) => [...prev, value]);
    }
    inputRef.current.value = "";
  };

  const filtredItems = useMemo(
    () =>
      items.filter((item) => {
        return item.toLowerCase().includes(query.toLowerCase());
      }),
    [items, query]
  );

  return (
    <div className="app">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <br />
      <br />
      <form onSubmit={submit}>
        New Items : <input ref={inputRef} type="text" />
        <button type="submit">Add</button>
      </form>
      <h3> Items:</h3>
      {filtredItems.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
};

export default App;
