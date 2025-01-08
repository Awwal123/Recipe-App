import { Home } from "./components/Home";
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
              {/* <Route path="" */}
        </Routes>
        </Router>
      
      </div>
      
    </>
  )
}

export default App
