// import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import CreateStudent from './comp/CreateStudent'
import DisplayStudent from './comp/DisplayStudent'
import Login from './comp/Login'
import Header from './comp/Header'
import Logout from './comp/Logout';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<DisplayStudent/>} exact />
        <Route path='/AddStudent' element={<CreateStudent/>} exact />
        <Route path='/Login' element={<Login/>} exact />
        <Route path='/Logout' element={<Logout/>} exact />
        <Route path='*' element={<DisplayStudent/>} exact />
      </Routes>
      {/* <Login/> */}
      {/* <CreateStudent/> */}
      
    </div>
  );
}

export default App;
