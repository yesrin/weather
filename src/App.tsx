import React, { useState, ChangeEvent } from "react";
import "./App.css";

const App: React.FC = () => {
  const [city, setCity] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Enter city" onChange={handleChange} />
        <button type="submit">Get weather</button>
        <h2>City:{city}</h2>
      </form>
    </div>
  );
};

export default App;
