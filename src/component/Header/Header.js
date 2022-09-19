
import './Header.css';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from 'react-redux';
import ListService from '../../services/loginService';
import {useNavigate} from 'react-router-dom';
 
function Header(){

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const usersInfo = useSelector((state) => state.loginDetails);
  console.log(usersInfo);

  const onLogoutHandler=()=>{
    ListService.logoutUsers(dispatch);
    navigation('');
  }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to=""><i className="fa fa-address-book" aria-hidden="true"></i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="">Contact</Link>
              </li>
            
          
          </ul>
          {!usersInfo.success && <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0 button-margin" type="submit"><Link to="">Sign up</Link></button>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="login">Login</Link></button>
          </form>}
          {usersInfo.success && <form className="form-inline my-2 my-lg-0">
            <button className="btn btn-outline-success my-2 my-sm-0 button-margin" type="submit" onClick={onLogoutHandler}>Logout</button>
          </form>}
        </div>
      </nav>
    )
}
export default Header;