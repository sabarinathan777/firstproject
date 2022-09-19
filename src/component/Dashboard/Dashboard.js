import './Dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {



  const [getDetails, setDetails] = useState([]);
  const[getId,setId]=useState(-1);
  const [getForm, setForm] = useState({
    title: '',
    category: '',
    amount: '',
    date: ''
  });

  useEffect(() => {
    fetchList();
  }, [])

  const fetchList = () => {
    axios.get('http://localhost:3000/expense').then((result) => {
      console.log(result.data);
      setDetails(result.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  const onDeleteHandler = (id) => {
    axios.delete('http://localhost:3000/expense/' + id).then(() => {
      fetchList();
    }).catch(() => {

    })
  }

  const onEditSelectedHandler=(index,id)=>{
    setId(id);
    setForm({
      title: getDetails[index].title,
    category: getDetails[index].category,
    amount: getDetails[index].amount,
    date: getDetails[index].date
    })
  }

  const onChangeHandler = (event) => {
    setForm({
      ...getForm, [event.target.name]: event.target.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(getForm);
    axios.patch('http://localhost:3000/expense/'+getId, getForm).then(() => {
             fetchList();
    }).catch(() => {

    })
  }

  return (<div>
    <div className="container">
      <div className="row">

        <div className="col-4">
          <form>
            <div className="form-group">
              <label>expense Title</label>
              <input type="text" className="form-control" id="expenseTitle" name="expenseTitle" placeholder="expenseTitle" />

            </div>



            <button type="submit" className="btn btn-success">Search</button>
          </form>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <button className="btn btn-success"><Link to="/addexpense">Add Expense</Link></button>
        </div>
      </div>

    </div>

    <div className="container">
      <div className="row">
        <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Expense Title</th>
                <th scope="col">Expense Category</th>
                <th scope="col">Expense Amount</th>
                <th scope="col">Expense Date</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                getDetails.map((obj, index) => {
                  return (<tr key={index}>
                    <td>{index + 1}</td>
                    <td>{obj.title}</td>
                    <td>{obj.category}</td>
                    <td>{obj.amount}</td>
                    <td>{obj.date}</td>
                    <td><i data-toggle="modal" onClick={() => onEditSelectedHandler(index,obj.id)}   data-target="#exampleModal" className="fa fa-pencil-square-o" aria-hidden="true"></i></td>
                    <td><i onClick={() => onDeleteHandler(obj.id)} className="fa fa-trash" aria-hidden="true"></i></td>
                  </tr>)
                })
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>expense Title</label>
                <input type="text" value={getForm.title} onChange={onChangeHandler} className="form-control" id="expenseTitle" name="title" placeholder="expenseTitle" />

              </div>
              <div className="form-group">
                <label>Expense category</label>
                <select className="form-control" value={getForm.category} onChange={onChangeHandler} id="expenseCategory" name="category">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className="form-group">
                <label>Expense Amount</label>
                <input type="number" value={getForm.amount} onChange={onChangeHandler} className="form-control" id="expenseAmount" name="amount" placeholder="expenseAmount" />

              </div>
              <div className="form-group">
                <label>Date</label>
                <input type="date" value={getForm.date} onChange={onChangeHandler} className="form-control" id="date" name="date" placeholder="date" />

              </div>


              <button type="submit" onClick={onSubmitHandler} data-dismiss="modal" className="btn btn-success">Update</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>)
}
export default Dashboard;