import './App.css';
// Router
import {Routes, Route} from "react-router-dom"
// Pages
import Category from "./pages/Category"
import Product from "./pages/Product"
import Cart from "./pages/Cart"

function App() {
  return (
    
      <div className="App">
        {/* <Category/>     
        <Product/>
        <Cart/>  */}
      <Routes>
        <Route exact path="/" element={<Category/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </div>
    
  );
}

export default App;
