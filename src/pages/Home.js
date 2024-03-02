import React, { useContext } from "react";
import { CounterButtons } from "../Component/CounterButtons";
const Home = () => {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <CounterButtons></CounterButtons>
    </div>
  );
};

export default Home;
