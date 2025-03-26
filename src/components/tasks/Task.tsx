import { useEffect, useState } from "react";
import "./Task.css";

function Task() {
  const [message, setMessage] = useState([]);

    useEffect(() => {
      fetch("https://javscriptfunction.azurewebsites.net/api/getDbdata?")
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error("Error fetching API:", error));
    }, []);
  return (
    <div className='task-container'>   
     <table className="table">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    </div >
  )
}
export default Task
