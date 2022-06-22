import logo from "./../images/tasty-logo-04 1.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    setInput("");
  };

  return (
    <section className="headerContainer">
      <Link to={"/"}>
        <img src={logo} alt={logo} />
      </Link>

      <h1>Find a recipe,an idea,an inspiration...</h1>
      <form onSubmit={handleChange} action="">
        <input style={{ outlineColor: "#FF6E85" }}
          type="search"
          placeholder="Type something to search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <Link to={input ? `/search/${input}` : "/search/undefined"}>
          <button type="submit">Search</button>
        </Link>
      </form>
    </section>
  );
};

export default Header;
