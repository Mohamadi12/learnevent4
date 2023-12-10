import { useState } from 'react';
import './App.css';

function App() {
  const [cars, setCars]=useState([])
  const [carYear, setCarYear]=useState(new Date().getFullYear())
  const [carMake, setCarMake]=useState("")
  const [carModel, setCarModel]=useState("")

  function handleAddCar(){
    // Creation de newCar
    const newCar={year: carYear,
                  make: carMake,
                  model: carModel};
    // Stockage de newCar, c a été chosi aleatoirement pour ouvrir la boîte
   setCars(c=>[...c,newCar]);

   setCarYear(new Date().getFullYear());
   setCarMake("");
   setCarModel("");    
  }

  function handleRemoveCar(index){
    setCars(c=>c.filter((_,i)=>i !==index))
  }

  function handleYearChange(e){
    setCarYear(e.target.value)
  }
  function handleModelChange(e){
    setCarModel(e.target.value)
  }
  function handleMakeChange(e){
    setCarMake(e.target.value)
  }
  return (
    <div className="App">
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((el,index)=>
             <li key={index} onClick={()=>handleRemoveCar(index)}>
              {el.year} {el.make} {el.model}
             </li>
        )}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange}/> <br />
      <input type="text" placeholder='Enter car make' value={carMake} onChange={handleMakeChange}/> <br />
      <input type="text" placeholder='Enter car model' value={carModel} onChange={handleModelChange}/> <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default App;
