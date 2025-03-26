
import { useEffect, useState } from 'react';
import './App.css'
import Task from './components/tasks/Task';

function App() {
  const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("https://myazurefunction1235.azurewebsites.net/api/httpTrigger1?name=Tojina")
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error("Error fetching API:", error));
    }, []);
  return (
    <div className='app'>   
      <h5>{message} ,Welcome to my Task Manager App</h5> 
      <div className='form-container'>
          
      <form>
  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='type your task...'/>
  </div>
  <button type="submit" className="btn btn-primary">Add</button>
</form> 

</div> 
<Task/>
    </div >
  )
}
export default App
