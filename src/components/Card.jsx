import ProductSection from "./ProductSection";

const Card = ({ item, isHome = false, isShop = false }) => {
  return (
    <article>
      <div className="card">
        <h3>{item.title}</h3>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "10%", height: "10%" }}
        />
        <p>{item.category}</p>
        <p>
          ${item.price}{" "}
          {!isHome && (
            <span>
              | {item.rating.rate} ({item.rating.count})
            </span>
          )}
        </p>
      </div>
      {!isHome && <ProductSection isShop={isShop} item={item} />}
    </article>
  );
};

export default Card;
