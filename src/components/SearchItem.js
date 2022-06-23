import { Link } from "react-router-dom";

const SearchItem = ({ img, id, name, i }) => {
  return (
    <Link to={`/detail/${id}`}>
<<<<<<< HEAD
      <section className="searchItemContainer">
        <div>
          <h1>{name}</h1>
          <img src={img} alt={img} />
        </div>
=======
      <section
        className="searchItemContainer"
        style={{ backgroundColor: i % 2 === 0 ? "#FF6E85 " : " #ffab61e8" }}
      >
        <h1>{name}</h1>
        <img src={img} alt={img} />
>>>>>>> 77712c2af699c94a69dfc0421ad44ee8356c6e9b
      </section>
    </Link>
  );
};

export default SearchItem;
