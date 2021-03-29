import logo from './logo.svg';
import './App.css';
import PlantTypeList from "./frontend/components/PlantTypeList";
import { useState } from 'react';

function App() {

  const [data, setData] = useState([
    {
      ptype: "fák", species: [{ name: "cseresznye", month: "április", color: "rózsaszín", scent: "semmilyen" },
      { name: "szilva", month: "április", color: "rózsaszín", scent: "illatos" },
      { name: "mandula", month: "március", color: "fehér", scent: "illatos" },
      { name: "alma", month: "május", color: "rózsaszín", scent: "illatos" }]
    }, {
      ptype: "bokrok", species: [{ name: "hóbogyó", month: "november", color: "fehér", scent: "semmilyen" },
      { name: "varjúháj", month: "április", color: "sárga", scent: "büdös" },
      { name: "orgona", month: "május", color: "lila", scent: "isteni" },
      { name: "tűztövis", month: "április", color: "piros", scent: "semmilyen" }]
    },
    {
      ptype: "virágok", species: [{ name: "hóvirág", month: "február", color: "fehér", scent: "büdös" },
      { name: "jácint", month: "március", color: "lila", scent: "isteni" },
      { name: "nárcisz", month: "április", color: "sárga", scent: "semmilyen" },
      { name: "tulipán", month: "április", color: "piros", scent: "semmilyen" }]
    }
  ]);
  console.log(data);
  return (
    <div className="App">
      <PlantTypeList data={data} />

    </div>
  );
}

export default App;
