import React, { useEffect, useState } from "react";
import Card from "./Card";
import fakeStoreAPI from "../apiServices/fakeStoreAPI";

const Cards = ({ isHome = false }) => {
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
      {loading ? (
        <p>Loading...</p>
      ) : (
        selectItems.map((item) => (
          <Card key={item.id} item={item} isHome={isHome} />
        ))
      )}
    </main>
  );
};

export default Cards;
