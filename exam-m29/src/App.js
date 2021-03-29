import logo from './logo.svg';
import './App.css';
import PlantTypeList from "./frontend/components/PlantTypeList";
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/gardendata")
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  if (data) {

    return (
      <div className="App">
        <PlantTypeList data={data} />

      </div>
    );
  }
  else {
    return "Something is wrong"
  }
}

export default App;
