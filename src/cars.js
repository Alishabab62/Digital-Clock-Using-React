import React from "react";
/**
 * 1. Create a clock show current time
 *    Format: HH:mm:ss
 *
 * 2. Render Car List
 *  e.g.
 *    - Honda Vezel - New - $2000
 *    - Honda Civic - Used - $3000
 *
 * 3. Create a search box, search cars by make & model
 *  e.g
 *    - search Honda - the list renders 2 cars
 *    - search Vezel - the list renders 1 car
 *    - search A3 Vezel - the list renders 2 cars
 */

export const CAR_LIST = [ 
  { id: 1, make: "Mitsubishi", model: "Lancer", type: "Used" },
  { id: 2, make: "Honda", model: "Vezel", type: "New" },
  { id: 3, make: "Honda", model: "Civic", type: "Used" },
  { id: 4, make: "Audi", model: "A3", type: "New" },
  { id: 5, make: "Audi", model: "A4", type: "Used" },
  { id: 6, make: "Audi", model: "A7", type: "New" },
  { id: 7, make: "BMW", model: "i8", type: "Used" },
];

export const PRICE_LIST = [
  { car_id: 1, price: 1000 },
  { car_id: 2, price: 2000 },
  { car_id: 3, price: 3000 },
  { car_id: 4, price: 4000 },
  { car_id: 5, price: 5000 },
  { car_id: 6, price: 6000 },
  { car_id: 7, price: 7000 },
];

function Cars() {
  //   let [car, setCar] = React.useState(CAR_LIST);
  //   setCar(CAR_LIST)
  return (
    <div>
      {CAR_LIST.map((car, key) => {
        return <p>{car.make + "-" + car.model + "-" + car.type}</p>;
      })}
    </div>
  );
}

export default Cars;
