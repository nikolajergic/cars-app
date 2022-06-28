import CarsServices from '../services/CarsServices';

 function AddCar() {
    
     const addNewCars = (e) => {
        e.preventDefault();
    
        const newCar = CarsServices.add(newCar);
    
        setCars([...cars, newCar])
        setNewCars({
          brand: '',
          model: '',
          year: '',
          maxSpeed: '',
          isAutomatic: '',
          engine: '',
          numbersOfDoors: '',
        })
    
    return (
    <div>
            
            <h1>Add car</h1>

            <form className="form" onSubmit={AddCar}>

            <laber for="brand">Brand</laber>
            <label for="model">Model</label>
            {/* year preko select box-a */}
            <label for="maxSpeed">Max Speed:</label>
            <input type="maxSpeed" id="maxSpeed" name="maxSpeed"
            min="10" max="200"></input>
            <label for="numberOfDoors">Number of doors:</label>
            <input type="numberOfDoors" id="numberOfDoors" name="numberOfDoors"
            min="2" max="5"></input>
            <input type="checkbox" id="isAutomatic" name="isAutomatic" value="isAutomatic"></input>
            <label for="isAutomatic"> Is automatic</label>


            </form>
    
    </div>
        
    
    )    
}
 }


export default AddCar;