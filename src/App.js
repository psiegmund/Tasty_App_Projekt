import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailList from "./components/DetailList";
import MealList from "./components/MealList";
import Main from "./pages/Main";
// import RandomItem from "./components/RandomItem";
import "./App.scss";
import { AuthContextProvider } from "./context/AuthContext";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [white, setWhite] = useState(true);

  return (
    <AuthContextProvider>
<<<<<<< HEAD
      <div className="App" style={{ color: white ? 'black' : 'white', backgroundColor: white ? 'white' : 'black' }}>
        <button onClick={() => setWhite(!white)}> → {white ? 'Blackmode' : 'Whitemode'}</button>
=======
      <div
        className="App"
        style={{
          color: white ? "black" : "white",
          backgroundColor: white ? "white" : "black",
        }}
      >
        <button onClick={() => setWhite(!white)}>
          Change to {white ? "Blackmode" : "Whitemode"}
        </button>
>>>>>>> 77712c2af699c94a69dfc0421ad44ee8356c6e9b
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/category/:name" element={<MealList />} />
          <Route path="/detail/:id" element={<DetailList />} />
          <Route path="/search/:input" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </AuthContextProvider>
  );
}

export default App;
