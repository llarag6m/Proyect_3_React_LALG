import { useEffect, useState } from "react";
import "./App.css";
import { getRamdomDimension } from "./utils/random";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";
import axios from "axios";

function App() {
  const [currentLocation, setcurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;

    const url = `https://rickandmortyapi.com/api/location/${newLocation}`;
    console.log(url);

    axios
      .get(url)
      .then(({ data }) => setcurrentLocation(data))
      .catch((err) => console.log(err));
  };

  const fechtDimension = (IdLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${IdLocation}`;
    axios
      .get(url)
      .then(({ data }) => setcurrentLocation(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const ramdomDimension = getRamdomDimension(126);
    fechtDimension(ramdomDimension);
  }, []);

  return (
    <main className="bg-header min-h-screen text-white pt-0  ">
      <div className=" bg-center flex justify-center items-center relative ">
        <img className="w-[350px] absolute animate-spin-slow  " src="/img/circle.png" alt="" />
        <img className="w-[300px] absolute top-full " src="/img/name.png" alt="" />
        <img className="w-[80%] absolute" src="/img/Ellipse.png" alt="" />
      </div>
      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation}/>
    </main>
  );
}

export default App;
