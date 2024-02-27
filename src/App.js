import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import ModalPopup from './component/ModalPopup';
import Navbar from './component/navbar';
import MainPage from './component/MainPage';
import YourComponent from './component/socialLogin';
import Testing from './component/TestingPage';
import { hot } from 'react-hot-loader/root';

function App() {
  return(
    <div className='App'>
      {/* <Testing /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/linkedin' element={<MainPage />}/>
          <Route path='/facebook' element={<MainPage />}/>
          <Route path='/instagram' element={<MainPage />}/>
          <Route path='/YourComponent' element={<YourComponent />}/>

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default hot(App);
