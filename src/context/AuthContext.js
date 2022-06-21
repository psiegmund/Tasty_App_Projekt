import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [data, setData] = useState([]);

  let test;

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((json) => setData(json.categories));
  }, [test]);

  const [random, setRandom] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((json) => setRandom(json.meals[0]));
  }, [test]);
  const randomId = random.idMeal;
  //   console.log(random);

  // const [searchData, setSearchData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${category}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setSearchData(json.meals);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(searchData);
  return (
    <AuthContext.Provider
      value={{
        data: data,
        setData: setData,
        random: random,
        randomId: randomId,
        // searchData: searchData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
