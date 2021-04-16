import './App.css';
import PlantTypeList from "./frontend/components/PlantTypeList";
import { useEffect, useState } from 'react';

//This is the first part of the frontend code. Fetches the data from backend and renders the next level component
function App() {

  //set a state for the data to be fetched
  const [data, setData] = useState([]);

//first fetch the data through the endpoint and set the response as "data" in a state
  useEffect(() => {
    fetch("http://localhost:8000/api/gardendata")
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

//if the data is available, render PlantTypeList component and give it "data" as param, if not, show an error message

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
