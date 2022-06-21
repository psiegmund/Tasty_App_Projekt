import logo from "./../images/tasty-logo-04 1.svg";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
// import AuthContext from "../context/AuthContext";

const Header = () => {
  // const { data, setData, searchData } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    // const filteredData = data.filter((el) =>
    //   el.strCategory.toLowerCase().includes(input.toLowerCase())
    // );
    // setData(filteredData);
    setInput("");
  };
  console.log(input);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [input]);

  console.log(data);

  return (
    <section className="headerContainer">
      <Link to={"/"}>
        <img src={logo} alt={logo} />
      </Link>

      <p>Find a recipe,an idea,an inspiration...</p>
      <form onSubmit={handleChange} action="">
        <input
          type="text"
          placeholder="Type something to search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Header;
