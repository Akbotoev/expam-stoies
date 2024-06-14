
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import { Catalog } from "./pages/Catalog"
import First from "./pages/Shop/First"

export const App = () => {
  return (
   <>
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/logo" element={<First/>}/>
        <Route path="/shop" element={<Catalog/>}/>
      </Routes>
     </BrowserRouter>
   </>
  )
}

export default App
