const LocationForm = ({handleSubmit}) => {
  return (
  <section> 
    <div className=" bg-center flex justify-center items-center relative ">
        <img className="max-h-[350px]  absolute animate-spin-slow " src="/img/circle.png" alt="" />
        <img className="w-[300px] absolute top-full " src="/img/name.png" alt="" />
        <img className="w-[90%] absolute" src="/img/Ellipse.png" alt="" />
      </div>

    <form onSubmit={handleSubmit} className="grid sm:flex justify-center flex-wrap m-24 mx-auto pt-[25%] ">
       <input className="outline-0 text-white bg-black border-solid border-[3px] border-green-700 w-[50%] text-center " min={1} id = "newLocation" max={126} placeholder="Type a location id..." type="number" />
       <button className="flex items-center font-semibold  border-solid border-[3px] border-green-700 hover:bg-green-900  bg-green-500 min-h-[40px] min-w-[215px] justify-center ">Search</button>
    </form>
  </section>
  )
}
export default LocationForm