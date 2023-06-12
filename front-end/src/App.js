import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';

function App() {
  return (
    <div className="App">
       <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/recipe/:id' element={<RecipeDetails />} />
     </Routes>
    </div>
  );
}

export default App;
