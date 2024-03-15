import React, { useState } from "react";
import SearchComponent from "./components/SearchComponent";

// Sample data
const data = [
  { title: "Apple" },
  { title: "Banana" },
  { title: "Orange" },
  { title: "Strawberry" },
  { title: "Grapes" },
  { title: "Watermelon" },
  { title: "Pineapple" },
  { title: "Mango" },
  { title: "Peach" },
  { title: "Kiwi" },
  { title: "Blueberry" },
  { title: "Raspberry" },
  { title: "Blackberry" },
  { title: "Cherry" },
  { title: "Lemon" },
];

function ResultItem({ title }) {
  return <div className="result-item">{title}</div>;
}

function App() {
  const [results, setResults] = useState([]);

  return (
    <div id="app-container">
      <h1>Fuzzy Search</h1>
      <div
        style={{
          padding: "1rem",
          fontSize: "0.9rem",
        }}
      >
        <div style={{ fontSize: "1.25rem", fontWeight: "500" }}>
          What is fuzzy searching?
        </div>
        Generally speaking, fuzzy searching (more formally known as approximate
        string matching) is the technique of finding strings that are
        approximately equal to a given pattern (rather than exactly). Why should
        I use it?
      </div>
      <div
        style={{ fontSize: "1.25rem", fontWeight: "500", padding: "0 1rem" }}
      >
        Searchable list
      </div>
      <div id="search-list-container">
        {data.map((item, index) => {
          return (
            <div className="item" key={index}>
              {item.title}
            </div>
          );
        })}
      </div>
      <SearchComponent data={data} setResults={setResults} />
      <div id="results">
        {results.map((result, index) => (
          <ResultItem key={index} title={result.item.title} />
        ))}
      </div>
    </div>
  );
}

export default App;
