import React, { useParams, useEffect, useState } from "react";
import CategoryList from "./CategoryList";

export default function Search() {
  const [data, setData] = useState([]);

  let { input } = useParams();
  console.log(input);

  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.input}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json.meals);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  // console.log(data);

  return (
    <div>
      <h2>Everything </h2>
    </div>
  );
}
