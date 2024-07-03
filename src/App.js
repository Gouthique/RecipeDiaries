import {
  BrowserRouter as Router,
  Routes,
  Route,Navigate
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";
import Login from "./pages/Login"; 
import Logout from "./pages/Logout";
import Register from "./pages/Register"; 
import Recommender from "./pages/Recommender";
import MyProfile from "./pages/myProfile";
import RecipeDiary from "./pages/Recipes/RecipeDiary";
import CreateRecipe from "./pages/Recipes/CreateRecipe";
import UpdateRecipe from "./pages/Recipes/UpdateRecipe";
import RecipePage from "./pages/RecipePage";
import Inventory from "./pages/Inventory";

function App() {
  const user = localStorage.getItem("token");
  const loggedIn = localStorage.getItem("LoggedIn");
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={loggedIn === "true" ? <Home /> : <Login />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} /> {/* Add Login route */}
          <Route path="/register" element={<Register />} />
          <Route path="/recommender" element={<Recommender />} /> {/* Add Register route */}
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myrd" element={<RecipeDiary />} />
          <Route path="/createrecipe" element={<CreateRecipe />} />
          <Route path="/updaterecipe/:id" element={<UpdateRecipe />} />
          <Route path="/recipepage/:id" element={<RecipePage />} />
          <Route path="/inventory" element={<Inventory />} />
          
          {user && <Route path="/" exact element={<Logout />} />}
          {!user && <Route path="/" exact element={<Navigate replace to="/login" />} />}
          {/* Add additional routes as needed */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
