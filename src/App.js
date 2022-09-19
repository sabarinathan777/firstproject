import './App.css';
import './Assets/font-awesome/css/font-awesome.min.css';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import About from './component/About/About';
import Expense from './component/Expense/Expense';
import Dashboard from './component/Dashboard/Dashboard';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
   <div>
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="" element={<Register/>}></Route>
     <Route path="login" element={<Login/>}></Route>
     <Route path="about" element={<About/>}></Route>
     <Route path="addexpense" element={<Expense/>}></Route>
     <Route path="dashboard" element={<Dashboard/>}></Route>
     </Routes>
     </BrowserRouter>
 
    </div>
  );
}

export default App;
