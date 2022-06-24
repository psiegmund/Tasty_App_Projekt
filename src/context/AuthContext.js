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

  return (
    <AuthContext.Provider
      value={{
        data: data,
        setData: setData,

      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
