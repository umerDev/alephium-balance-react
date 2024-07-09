import React from "react";
import { SearchButton } from "../Component/Search";
const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Enter an alephium address</h2>
      <SearchButton></SearchButton>
    </div>
  );
};

export default Home;
