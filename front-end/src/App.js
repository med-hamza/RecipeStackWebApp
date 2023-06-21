import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import LayoutRecipe from './Layout/LayoutRecipe';
import Wishlist from './pages/Wishlist';
import Planner from './components/Planner'


function App() {
  return (
    <div style={{ backgroundImage: `url(/bg_recipe.png)`, backgroundRepeat: 'no-repeat'}}>
      <div className="" >
        <Routes>
          <Route path="/" element={<LayoutRecipe />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/planner" element={<Planner />} />
            <Route index element={<Home />} />
            <Route path="recipe/:id" element={<RecipeDetails />} />
          </Route>
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </div>
      </div>

  );
}

export default App;

