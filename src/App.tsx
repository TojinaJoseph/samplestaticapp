
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("https://myazurefunction1235.azurewebsites.net/api/httpTrigger1?name=Tojina")
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error("Error fetching API:", error));
    }, []);
  return (
    <>   
      <h1>{message} ,Welcome to my updated react webapp</h1>     
    </>
  )
}
export default App
