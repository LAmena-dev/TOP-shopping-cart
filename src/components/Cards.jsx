import React, { useEffect, useState } from "react";
import Card from "./Card";
import fakeStoreAPI from "../apiServices/fakeStoreAPI";

const Cards = ({ isHome = false, isShop = false }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fakeStoreAPI();
        console.log(data);

        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const selectItems = isHome ? items.slice(0, 5) : items;

  return (
    <main>
      <h2>{isHome ? "Featured Products" : "All Products"}</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        selectItems.map((item) => (
          <Card key={item.id} item={item} isHome={isHome} isShop={isShop} />
        ))
      )}
    </main>
  );
};

export default Cards;
