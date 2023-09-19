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
import PrintPc from './components/printpc/PrintPc';
import Layout from './routes/Layout';
import Login from './auth/login/Login';
import Register from './auth/register/Register';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element={
                <Layout>
                  <Home />
                </Layout>
              }></Route>
            <Route
              path='/login'
              element={
                <Layout>
                  <Login />
                </Layout>
              }></Route>
            <Route
              path='/register'
              element={
                <Layout>
                  <Register />
                </Layout>
              }></Route>
            <Route
              path='/:productName'
              element={
                <Layout>
                  {' '}
                  <ProductDetails />{' '}
                </Layout>
              }></Route>
            <Route path='/about' element={<About />}></Route>
            <Route
              path='/components'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/laptop'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/mobile'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/camera'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/security-camera'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>

            <Route
              path='/office-equipment'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/networking'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/server-networking'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/software'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/accessories'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/gadget'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/desktops'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/tablet'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/television'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/gaming'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/ups'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>
            <Route
              path='/air-conditioner'
              element={
                <Layout>
                  {' '}
                  <ProductsComponent />{' '}
                </Layout>
              }></Route>

            {/* pc builder */}
            <Route
              path='/pc-builder'
              element={
                <Layout>
                  {' '}
                  <PcBuilder />{' '}
                </Layout>
              }></Route>
            <Route
              path='/pc-builder/choose-component/:componentName'
              element={
                <Layout>
                  {' '}
                  <ChooseComponents />{' '}
                </Layout>
              }></Route>
            <Route
              path='/product/compare'
              element={
                <Layout>
                  {' '}
                  <ProductCompare />{' '}
                </Layout>
              }></Route>
            <Route
              path='/cart'
              element={
                <Layout>
                  {' '}
                  <Cart />{' '}
                </Layout>
              }></Route>
            <Route
              path='*'
              element={<ErrorPage />} // Replace with your error component
            />
            <Route path='/print-pc' element={<PrintPc />}></Route>
          </Routes>

          <ToastContainer position='top-right' autoClose={2000} />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
