import React, { useState } from "react";
import { Input } from "@material-tailwind/react";

const url = (address) =>
  `https://wallet.mainnet.alephium.org/addresses/${address}/balance`;

export async function getBalance(address) {
  if (!address) return new Error("Provide a valid address");

  const response = await fetch(url(address));

  if (response.status !== 200)
    throw new Error(`unable to decode balance data for ${address}`);

  const json = await response.json();
  return json.balance;
}

export const SearchButton = () => {
  let [text, setText] = useState("");
  let [data, setData] = useState("");
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const fetch = async () => {
    try {
      if (!text) {
        alert("Enter a valid address");
        return;
      }
      const data = await getBalance(text);

      setData(data);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-72">
      <Input type="text" value={text} onChange={handleInputChange} />
      <button name="search" onClick={fetch}>
        Search
      </button>
      <h2> Balance: {data}</h2>
    </div>
  );
};
