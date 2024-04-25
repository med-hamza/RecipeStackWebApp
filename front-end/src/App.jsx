import Home from './pages/Home';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import RecipeDetails from './pages/RecipeDetails';
import LayoutRecipe from './Layout/LayoutRecipe';
import Wishlist from './pages/Wishlist';
import Plan from './pages/Plan';
import RecipePage from './pages/RecipePage';
import Login from './components/Authentication/Login';
import Register from './components/Authentication/Register';
import 'react-toastify/ReactToastify.css';
import Profile from './components/Authentication/Profile';
import PrivateRoute from './components/Authentication/PrivateRoute';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LayoutRecipe />}>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/planner" element={<Plan />} />
        <Route index element={<Home />} />
        <Route path='/recipes' element={<RecipePage />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App;

