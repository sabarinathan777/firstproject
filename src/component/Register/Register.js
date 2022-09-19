import styles from './Register.module.css';
import {useState,useEffect} from 'react';
import {emptyValues} from '../Helper/validation';
import {registerLabel} from '../Helper/constant';
import { useNavigate } from "react-router-dom";


function Register(){

  const navigation = useNavigate();

  const [getForm,setForm]=useState({
      firstName:'vzxvz',
      lastName:'',
      email:'',
      password:''
  });
  


  const [getFormValidation,setFormValidation]=useState({
    firstName:true,
    lastName:true,
    email:true,
    password:true
  });

  const [getGlobal,setGlobal]=useState(false);

 

  useEffect(()=>{
    if(!getFormValidation.firstName && !getFormValidation.lastName && !getFormValidation.email && !getFormValidation.password){
      sessionStorage.setItem("email",getForm.email);
      sessionStorage.setItem("password",getForm.password);
      navigation('login');
    }
},[getFormValidation])

  const onChangeHandler=(event)=>{
    setForm({...getForm,[event.target.name]:event.target.value});
  }

  

  const onSubmitHandler=(event)=>{
    event.preventDefault();  
       setGlobal(true);
       setFormValidation({
        firstName:emptyValues(getForm.firstName),
        lastName:emptyValues(getForm.lastName),
        email:emptyValues(getForm.email),
        password:emptyValues(getForm.password)
       });
   
  }


  return(
     
    <div className="container">
    <div className="row">
     <div className="col-4"></div> 
     <div className="col-4">
         <form>
           {getForm.firstName}
             <div className="form-group">
                 <label>first Name</label>
                 <input className={`${styles.boxControl} form-control`} type="text" onChange={onChangeHandler}   id="firstName"  name="firstName" placeholder="first Name"/>
                 {getGlobal && getFormValidation.firstName && <div className="alert alert-danger" role="alert">
                       {registerLabel.firstName}
                  </div>}
               </div>
               <div className="form-group">
                 <label>last Name</label>
                 <input className={`${styles.boxControl} form-control`} type="text" onChange={onChangeHandler}  id="lastName"  name="lastName" placeholder="first Name"/>
                 {getGlobal && getFormValidation.lastName && <div className="alert alert-danger" role="alert">
                       {registerLabel.lastName}
                  </div>}
               </div>
               <div className="form-group">
                 <label>Email</label>
                 <input className={`${styles.boxControl} form-control`} type="email" onChange={onChangeHandler} id="email"  name="email" placeholder="email"/>
                 {getGlobal && getFormValidation.email && <div className="alert alert-danger" role="alert">
                       {registerLabel.email}
                  </div>}
               </div>
               <div className="form-group">
                 <label>password</label>
                 <input className={`${styles.boxControl} form-control`} type="password" onChange={onChangeHandler} id="password"  name="password" placeholder="password"/>
                 {getGlobal && getFormValidation.password && <div className="alert alert-danger" role="alert">
                       {registerLabel.password}
                  </div>}
               </div>
             
            
             <button onClick={onSubmitHandler} type="submit" className="btn btn-success">Submit</button>
           </form>
     </div> 
     <div className="col-4"></div>   
 </div> 
 
 </div>
)

}
export default Register;