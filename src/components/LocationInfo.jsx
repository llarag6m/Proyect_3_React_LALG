const LocationInfo = ({currentLocation}) => {
    console.log(currentLocation)
  return (
    <section className="text-green-500 grid text2xl gap-20">
        <h2 className=" text-center font-fira">Welcome to the {currentLocation?.name}</h2>
        <ul className="grid grid-cols-3 gap-7 text-center ">
            <li className="font-medium text[16px] font-fira">Type: {currentLocation?.type}</li>
            <li className="font-medium text[16px] font-fira">Dimension: {currentLocation?.dimension}</li>
            <li className="font-medium text[16px] font-fira">Population: {currentLocation?.residents.length}</li>
        </ul>
    </section>
  )
}
export default LocationInfo