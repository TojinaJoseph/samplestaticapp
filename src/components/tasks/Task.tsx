import { useEffect, useState } from "react";
import "./Task.css";

interface Task {
  _id: string;   // Assuming each task has a unique identifier
  name: string; // Change `name` based on your actual API response
}

function Task() {
  const [task, setTask] = useState<Task[]>([]);
    console.log(task)
    useEffect(() => {
      fetch("https://javscriptfunction.azurewebsites.net/api/getDbdata?")
      .then(response => response.json())
      .then(data => setTask(data))
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
  {task.length > 0 ? (
            task.map((task) => (
              <tr key={task._id}>
                <td>{task.name}</td>
                <td>
                  <button>Edit</button> {/* Placeholder for actions */}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>No tasks found</td>
            </tr>
          )}
  </tbody>
</table>
    </div >
  )
}
export default Task
