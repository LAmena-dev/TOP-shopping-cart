const Card = ({ item, isHome = false }) => {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "10%", height: "10%" }}
      />
      <p>{item.category}</p>
      <p>${item.price}</p>
      {isHome ? (
        <></>
      ) : (
        <p>
          {item.rating.rate} <span>({item.rating.count})</span>
        </p>
      )}
    </div>
  );
};

export default Card;
