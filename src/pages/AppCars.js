import { useState } from "react";
import CarsServices from '../services/CarsServices';

function AppCars() {
    const [cars,setCars] = useState(CarsServices.getAll());

    return (
        <div>

            



        </div>

    )
}




export default AppCars;