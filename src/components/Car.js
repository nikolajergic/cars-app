import React from 'react'

function Car({  id,brand,model,year,maxSpeed,isAutomatic,engine,numberOfDoors}) {

        return (
            <div
              style={{
                border: '1px solid black',
                marginBottom: 10,
                padding: 5,
                width: 200,
                marginLeft: 5
              }}>
               <p>Brand: {brand}</p>
               <p>Model: {model}</p>
            </div>
          )

}

export default Car;