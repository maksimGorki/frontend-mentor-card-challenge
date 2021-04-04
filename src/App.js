import "./App.css";
import Card from "./components/Card";

const cars = [
  {
    carId: 1,
    carName: "sedans",
  },
  {
    carId: 2,
    carName: "suvs",
  },
  {
    carId: 3,
    carName: "luxury",
  },
];

function App() {
  return (
    <div className="wrapper">
      <div className="cardContainer">
        {cars.map((car, index) => {
          return <Card key={index} carName={car.carName} />;
        })}
      </div>
    </div>
  );
}

export default App;
