import React, { useState } from "react";
import Fuse from "fuse.js";
import SearchField from "./SearchField";

function SearchComponent({ data, setResults }) {
  const [query, setQuery] = useState("");

  // Options for Fuse
  const options = {
    keys: ["title"], // Specify which keys to search in
    threshold: 0.3, // Adjust the fuzzy search threshold as needed
  };

  // Create a new instance of Fuse
  const fuse = new Fuse(data, options);

  // Function to handle search query change
  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    // Perform search when the query changes
    const searchResults = fuse.search(newQuery);
    setResults(searchResults);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "1rem",
      }}
    >
      <SearchField handleInputChange={handleInputChange} />
    </div>
  );
}

export default SearchComponent;
