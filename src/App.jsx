import { BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home"
import Singlebook from "./pages/singlebook/Singlebook"
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Home />}/>
      <Route  path="/book/:id" element={<Singlebook/>}>
      </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
