import './App.css';
import React from 'react'
import { AuthState } from './Context/AuthContext';
import Home from "./components/Home/home"
import NavBar from './components/Header';
import Profile from './components/Profile/ProFile';
import Orders from './components/Orders/Orders';
import SellerProfile from './components/SellerDashboard.js/Seller';
import Write_review from './components/Product_details/review/write_review/write_review';
import Footer from './components/Footer';
import OrdersPlace from './components/Orders/Orders';
import Cart from './components/Cart/Cart';
import Details from './components/Product_details/Detail';
import SearchProduct from './components/ProductSearch/SearchProduct';
import SellerRegister from './components/seller/sellerRegister';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Payment from './components/Orders/Payment';
import OrderSuccessPage from './components/Orders/OrderSuccessPlace';
import SellerLogin from './components/seller/sellerLogin';
import HorizontalNonLinearStepper from './components/Orders/progress_stepper';
import OrderDetails from './components/Orders/OrderDetails';
import { OrderState } from './Context/OrderContext';
import { CartState } from './Context/CartContext';
function requireAuth(nextState, replace, next) {
  if (!localStorage.getItem("user")) {
    replace({
      pathname: "/",
      state: { nextPathname: nextState.location.pathname }
    });
  }
  next();
}
function App() {
  return (
    <BrowserRouter>
      <AuthState>
        <OrderState>
          <CartState>
            <Routes>
              <Route path='/ordersuccess' element={<><NavBar /><OrderSuccessPage /><Footer /></>} />
              <Route path='/' element={<><NavBar /><Home /><Footer /></>} />
              <Route path='/account/:UserId' onEnter={requireAuth} element={<>< NavBar /><Profile page={0} /><Footer /></>} />
              <Route path='/account/orders/:UserId' element={<>< NavBar /><Orders /><Footer /></>} />
              <Route path='/viewcart/:UserId' element={<>< NavBar /><Cart /><Footer /></>} />
              <Route path='/viewproduct/:productId' element={<>< NavBar /><Details /><Footer /></>} />
              <Route path='/search' element={<>< NavBar /><SearchProduct /><Footer /></>} />
              <Route path='/writereview/:ProductId' element={<><NavBar /> <Write_review /> <Footer /></>} />
              <Route path="/seller/register" element={<><SellerRegister /></>} />
              <Route path='/payment' element={<><NavBar /><Payment /><Footer /></>} />
              <Route path='/ordersuccess' element={<><NavBar /><OrderSuccessPage /><Footer /></>} />
              <Route path='/buyproduct' element={<><NavBar /><HorizontalNonLinearStepper /><Footer /></>} />
              <Route path='/orderdetails/:OrderId' element={<><NavBar /><OrderDetails/><Footer /></>} />
              <Route path='/seller/login' element={<><NavBar /><SellerLogin /></>} />
              <Route path='/admin/info/:SellerId' element={<>< NavBar /><SellerProfile /><Footer /></>} />
              <Route path='/admin/catlog/:SellerId' element={<>< NavBar /><SellerProfile /><Footer /></>} />
              <Route path='/admin/addproduct/:SellerId' element={<>< NavBar /><SellerProfile /><Footer /></>} />
              <Route path='/admin/viewproduct/:productId' element={<>< NavBar /><SellerProfile /><Footer /></>} />
              <Route path='/placeorder' element={<>< NavBar /><OrdersPlace /><Footer /></>} />

            </Routes>
          </CartState>
        </OrderState>
      </AuthState>
    </BrowserRouter>)
}

export default App;
