import { CheckOut } from "./components/CheckOut";
import { Home } from "./components/Home";
import  RecipeDetails  from "./components/RecipeDetails";
import Recipes from "./components/Recipes";
import { SignUp } from "./components/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/check-out" element={<CheckOut />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipe-details/:id" element={<RecipeDetails />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
