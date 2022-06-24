import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [data, setData] = useState([]);

  let dependArr;

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((json) => setData(json.categories));
  }, [dependArr]);

  const [random, setRandom] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((json) => setRandom(json.meals[0]));
  }, [dependArr]);
  const randomId = random.idMeal;
  console.log(random);

  return (
    <AuthContext.Provider
      value={{
        data: data,
        setData: setData,
        random: random,
        randomId: randomId,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
