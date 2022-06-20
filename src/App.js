import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import DetailList from './components/DetailList';
import MealList from './components/MealList';
import Main from './pages/Main';
import './App.scss';

function App() {




  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:name" element={<MealList />} />
        <Route path="/detail/:id" element={<DetailList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
