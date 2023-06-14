import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import LayoutRecipe from './Layout/LayoutRecipe';
import Wishlist from './pages/Wishlist';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<LayoutRecipe />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route index element={<Home />} />
            <Route path="recipe/:id" element={<RecipeDetails />} />
          </Route>
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </div>

  );
}

export default App;

