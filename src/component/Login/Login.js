import styles from './Login.module.css';
import {useEffect,useState} from 'react';
import {emptyValues} from '../Helper/validation';
import {registerLabel} from '../Helper/constant';
import {useNavigate} from 'react-router-dom';
import { useDispatch} from 'react-redux';
import ListService from '../../services/loginService';

function Login(){

  const dispatch = useDispatch();
  const navigation = useNavigate();
  const[getLoginForm,setLoginForm]=useState({
    email:'',
    password:''
  });

  const [getLoginValidation,setLoginValidation]=useState({
    email:true,
    password:true
  });

  const [getGlobal,setGlobal]=useState(false);

  const [validationMatch,setValidationMatch]=useState(false);

  const [getSubmitHandler,setSubmitHandler]=useState(false);

  useEffect(()=>{
    setLoginValidation({
      email:emptyValues(getLoginForm.email),
      password:emptyValues(getLoginForm.password)
    });
  
  },[getLoginForm])

  useEffect(()=>{
    if(getGlobal && !getLoginValidation.email && !getLoginValidation.password){
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if(email == getLoginForm.email && password == getLoginForm.password){
        ListService.loginUsers(dispatch,{email:getLoginForm.email,password:getLoginForm.password});
        navigation('/dashboard');
      }
      else{
        setValidationMatch(true);
      }
    }
  },[getSubmitHandler]);

  const onChangeHandler=(event)=>{
    setLoginForm({...getLoginForm,[event.target.name]:event.target.value})
  
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    setGlobal(true);
    setSubmitHandler(!getSubmitHandler);
    setLoginValidation({
      email:emptyValues(getLoginForm.email),
      password:emptyValues(getLoginForm.password)
    });

  }


  return (
    <div className="container">
     <div className="row">
      <div className="col-4"></div> 
      <div className="col-4">
          <form>
          {getGlobal && validationMatch && <div className="alert alert-danger" role="alert">
                       {registerLabel.validationMatch}
                  </div>}
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className={`${styles.boxControl} form-control`} onChange={onChangeHandler}  id="email"  name="email" placeholder="email"/>
                 {getGlobal && getLoginValidation.email && <div className="alert alert-danger" role="alert">
                       {registerLabel.email}
                  </div>}
                </div>
                <div className="form-group">
                  <label>password</label>
                  <input type="password" className={`${styles.boxControl} form-control`} onChange={onChangeHandler}  id="password"  name="password" placeholder="password"/>
                  {getGlobal && getLoginValidation.password && <div className="alert alert-danger" role="alert">
                       {registerLabel.password}
                  </div>}
                </div>
              
             
              <button onClick={onSubmitHandler} type="submit" className="btn btn-success">Submit</button>
            </form>
      </div> 
      <div className="col-4"></div>   
  </div> 
  
  </div>)  
}
export default Login;