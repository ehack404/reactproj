import { BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Singlebook from "./pages/singlebook/Singlebook"
import Addbook from "./pages/add/Addbook"
import Editbook from "./pages/edit/Editbook"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/book/:id" element={<Singlebook/>}/>
      <Route  path="/addbook" element={<Addbook />}/>
      <Route  path="/editbook/:id" element={<Editbook />}/>
    
      </Routes>
      </BrowserRouter>
  )
}

export default App
