const LocationForm = ({handleSubmit}) => {
  return (
   
    <form onSubmit={handleSubmit} className="grid sm:flex justify-center max-w-[900px] mx-auto pt-[20%] ">
       <input className="outline-0 text-white bg-black border-solid border-[3px] border-green-700 w-full text-center " min={1} id = "newLocation" max={126} placeholder="Type a location id..." type="number" />
       <button className="flex items-center font-semibold  border-solid border-[3px] border-green-700 hover:bg-green-900  bg-green-500 min-h-[40px] min-w-[215px] justify-center ">Search</button>
    </form>
  )
}
export default LocationForm