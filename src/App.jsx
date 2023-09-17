import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navabr from './pages/navbar/Navabr';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Footer from './pages/footer/Footer';
import ProductsComponent from './components/products/ProductComponent';
import ProductDetails from './components/product-details/ProductDetails';
import PcBuilder from './components/pc-builder/PcBuilder';
import ChooseComponents from './components/pc-builder/choosecomponents/ChooseComponents';

import ProductCompare from './pages/compare/ProductCompare';
import ErrorPage from './utils/ErrorPage';
import Cart from './pages/cart/Cart';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Navabr />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/:productName' element={<ProductDetails />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/components' element={<ProductsComponent />}></Route>
            <Route path='/laptop' element={<ProductsComponent />}></Route>
            <Route path='/mobile' element={<ProductsComponent />}></Route>
            <Route path='/camera' element={<ProductsComponent />}></Route>
            <Route
              path='/security-camera'
              element={<ProductsComponent />}></Route>
            <Route path='/ups-ips' element={<ProductsComponent />}></Route>
            <Route
              path='/office-equipment'
              element={<ProductsComponent />}></Route>
            <Route path='/networking' element={<ProductsComponent />}></Route>
            <Route
              path='/server-networking'
              element={<ProductsComponent />}></Route>
            <Route path='/software' element={<ProductsComponent />}></Route>
            <Route path='/accessories' element={<ProductsComponent />}></Route>
            <Route path='/gadget' element={<ProductsComponent />}></Route>
            <Route path='/desktops' element={<ProductsComponent />}></Route>
            <Route path='/tablet' element={<ProductsComponent />}></Route>
            <Route path='/television' element={<ProductsComponent />}></Route>
            <Route path='/gaming' element={<ProductsComponent />}></Route>
            <Route path='/ups' element={<ProductsComponent />}></Route>
            <Route
              path='/air-conditioner'
              element={<ProductsComponent />}></Route>

            {/* pc builder */}
            <Route path='/pc-builder' element={<PcBuilder />}></Route>
            <Route
              path='/pc-builder/choose-component/:componentName'
              element={<ChooseComponents />}></Route>
            <Route path='/product/compare' element={<ProductCompare />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route
              path='*'
              element={<ErrorPage />} // Replace with your error component
            />
          </Routes>
          <Footer />
          <ToastContainer position='top-right' autoClose={2000} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
