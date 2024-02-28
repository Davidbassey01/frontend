
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shoes' element={<ShopCategory banner={men_banner} category="shoes"/>}/>
        <Route path='/sneakers' element={<ShopCategory banner={women_banner} category="sneakers"/>}/>
        <Route path='/sandals' element={<ShopCategory banner={kids_banner} category="sandals"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId'element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
      
          </div>
  );
}

export default App;
