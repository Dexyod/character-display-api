import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";
import "./App.css";

const App = () => {
  //set state of items and call setItems
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  //fetch API
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        //add query onto end of API url so we can search data
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);
      //set items to the data and loading is complete so set to false
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
