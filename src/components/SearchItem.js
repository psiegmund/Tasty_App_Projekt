import { Link } from "react-router-dom";

const SearchItem = ({ img, id, name }) => {
  return (
    <Link to={`/detail/${id}`}>
      <section className="searchItemContainer">
        <div>
          <h1>{name}</h1>
          <img src={img} alt={img} />
        </div>
      </section>
    </Link>
  );
};

export default SearchItem;
