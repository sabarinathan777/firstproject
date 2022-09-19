import './Expense.css';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Expense(){

  const [getForm,setForm] = useState({
    title:'',
    category:'',
    amount:'',
    date:''
  });

  const navigation = useNavigate();

  const onChangeHandler=(event)=>{
         setForm({
           ...getForm,[event.target.name]:event.target.value
         })
  }

  const onSubmitHandler=(event)=>{
    event.preventDefault();
    console.log(getForm);
    axios.post('http://localhost:3000/expense',getForm).then(()=>{
      navigation('/dashboard');
    }).catch(()=>{
      navigation('/');
    })
  }

    return(<div className="container">
    <div className="row">
     
     <div className="col-4">
         <form>
             <div className="form-group">
                 <label>expense Title</label>
                 <input type="text" onChange={onChangeHandler} className="form-control" id="expenseTitle"  name="title" placeholder="expenseTitle"/>
                
               </div>
               <div className="form-group">
                 <label>Expense category</label>
                 <select className="form-control" onChange={onChangeHandler} id="expenseCategory" name="category">
                   <option value="1">1</option>
                   <option value="2">2</option>
                   <option value="3">3</option>
                   <option value="4">4</option>
                   <option value="5">5</option>
                 </select>
               </div>
               <div className="form-group">
                 <label>Expense Amount</label>
                 <input type="number" onChange={onChangeHandler} className="form-control" id="expenseAmount"  name="amount" placeholder="expenseAmount"/>
                
               </div>
               <div className="form-group">
                 <label>Date</label>
                 <input type="date" onChange={onChangeHandler} className="form-control" id="date"  name="date" placeholder="date"/>
                
               </div>
             
            
             <button type="submit" onClick={onSubmitHandler} className="btn btn-success">Add</button>
           </form>
     </div> 
     <div className="col-4"></div>   
     <div className="col-4"></div> 
 </div> 
 
 </div>)
}
export default Expense;