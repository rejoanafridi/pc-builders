import { Provider } from 'react-redux';
import './App.css';
import { store } from './redux/store';

import Navabr from './pages/navbar/Navabr';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about/About';
import Footer from './pages/footer/Footer';
import ProductsComponent from './components/products/ProductComponent';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Navabr />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/components' element={<ProductsComponent />}></Route>
            <Route path='/laptop' element={<ProductsComponent />}></Route>
            <Route path='/mobile' element={<ProductsComponent />}></Route>
            <Route path='/camera' element={<ProductsComponent />}></Route>
            <Route path='/ups-ips' element={<ProductsComponent />}></Route>
            <Route path='/office-equipment' element={<ProductsComponent />}></Route>
            <Route path='/network' element={<ProductsComponent />}></Route>
            <Route path='/server-networking' element={<ProductsComponent />}></Route>
            <Route path='/software' element={<ProductsComponent />}></Route>
            <Route path='/accessories' element={<ProductsComponent />}></Route>
            <Route path='/gadget' element={<ProductsComponent />}></Route>
            <Route path='/tablet' element={<ProductsComponent />}></Route>
            <Route path='/television' element={<ProductsComponent />}></Route>
            <Route path='/gaming' element={<ProductsComponent />}></Route>
  
            <Route path='/ups' element={<ProductsComponent />}></Route>
            <Route path='/air-conditioner' element={<ProductsComponent />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
