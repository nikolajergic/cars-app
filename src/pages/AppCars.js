import { useState,useEffect } from "react";
import CarsServices from '../services/CarsServices';
import Car from '../components/Car';

function AppCars() {
    const[cars,setCars] = useState([]);

    useEffect(() => {
        async function getCars() {
          try {
            const car = await CarsServices.getAll()
            
            setCars(car)
          } catch (error) {
            console.log(error)
          }
        } 
    
        getCars()
      }, [])

    return (
            cars.map((car, id) => 
                <Car
                  key={car.id}
                  id={car.id}
                  brand={car.brand}
                  model={car.model}
                  year={car.year}
                  maxSpeed={car.maxSpeed}
                  isAutomatic={car.isAutomatic}
                  engine={car.engine}
                  numberOfDoors={car.numberOfDoors}
                />
     ))



     

   
}




export default AppCars;