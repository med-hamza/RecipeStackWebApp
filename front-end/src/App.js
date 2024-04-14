import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import LayoutRecipe from './Layout/LayoutRecipe';
import Wishlist from './pages/Wishlist';
import Planner from './components/Planner'
import Recipe from './components/Recipe';
import Plan from './pages/Plan';
import RecipePage from './pages/RecipePage';


function App() {
  return (
    <div>
      <div className="" >
        <Routes>
          <Route path="/" element={<LayoutRecipe />}>
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/planner" element={<Plan />} />
            <Route index element={<Home />} />
            <Route path='/recipe' element={<RecipePage />} />
            <Route path="recipe/:id" element={<RecipeDetails />} />
          </Route>
          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </div>
    </div>

  );
}

export default App;

