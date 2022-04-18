import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';
import RealEstateDetail from './Pages/RealEstateDetail/RealEstateDetail';
import { createContext, useState } from 'react';
import Blogs from './Pages/Home/Blogs/Blogs';
import RequireAuth from './Pages/Login/RequrieAuth/RequireAuth';
import BookShowing from './Pages/BookShowing/BookShowing';

export const RealEstateContext = createContext();

function App() {
  const [realEstates, setRealEstates] = useState([]);
  return (
    <RealEstateContext.Provider value={[realEstates, setRealEstates]}>
      <div className='container'>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/realestate/:id' element={<RealEstateDetail></RealEstateDetail>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/bookshowing/:id' element={
            <RequireAuth>
              <BookShowing></BookShowing>
            </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </div>
    </RealEstateContext.Provider>
  );
}

export default App;
