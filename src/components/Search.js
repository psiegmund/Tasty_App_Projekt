import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchItem from "./SearchItem";

export default function Search() {
  const [data, setData] = useState([]);

  let { input } = useParams();

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
  console.log(input);

  // if (data === null) {
  //   setData([
  //     {
  //       idMeal: "404",
  //       strMeal: "Leider nichts gefunden",
  //       strMealThumb:
  //         "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  //       idCategory: "Search",
  //     },
  //   ]);
  // }

  // console.log(data);

  return (
    <div className="result">
      <h1 style={{ color: "orange" }}>
        {data ? `${data.length} results found for ${input} ` : `Not found`}
      </h1>

      {data
        ? data.map((el, i) => (
            <SearchItem
              key={i}
              id={el.idMeal}
              name={el.strMeal}
              img={el.strMealThumb}
            />
          ))
        : "Not found"}
    </div>
  );
}
