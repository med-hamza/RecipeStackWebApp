import Home from './pages/Home';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import LayoutRecipe from './Layout/LayoutRecipe';
import Wishlist from './pages/Wishlist';
import Plan from './pages/Plan';
import RecipePage from './pages/RecipePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutRecipe />}>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/planner" element={<Plan />} />
        <Route index element={<Home />} />
        <Route path='/recipes' element={<RecipePage />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
      </Route>
    </Routes>
  )
}

export default App;

