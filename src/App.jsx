import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Register from "./pages/Register"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signin" element={<Signin></Signin>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </>
  )
}

export default App;
