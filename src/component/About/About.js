import './About.css';
import phone from '../../Assets/image/contact.jpg'

function About(){
    return (<div>
          <div className="container">
           <div className="row">
               <div className="col-12">
               <img className="contact" alt="phone" src={phone}/>
            </div>
      
        </div> 
        
        </div>
    </div>)
}

export default About;