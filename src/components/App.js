import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [mode, setMode] = useState('light');

  return (
    <div className={`App ${mode === 'dark' ? 'dark' : 'light'}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
