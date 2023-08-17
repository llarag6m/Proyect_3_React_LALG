import { useEffect, useState } from "react"
import ResidentCard from "./ResidentCard"
import Pagination from "./Pagination";

const INITIAL_PAGE = 1

const ResidentList = ({residents,currentLocation}) => {
    
    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE)

    //almecena la cantidad de residentes a mostrar en cada pagina
    const RESIDENTS_PER_PAGE = 20;

    // Saber la Cantiad de paginas a necesitar
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE) 

    //Residentes a mostrar en la pagina actual
    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
    const residentesInpage = residents.slice(sliceStart, sliceEnd)

    //Generacion del arreglo de las paginas a mostrar
    const pages = []
    for(let i = 1; i <= totalPages; i++){
        pages.push(i)
    }

  useEffect(() => {
   setCurrentPage(INITIAL_PAGE)
  }, [currentLocation])
  

  return (
<section className="bg-fondbody bg-no-repeat bg-cover p-10 h-full w-full justify-center items-center ">
    <section className="flex flex-wrap gap-10 justify-center">
        {
          residentesInpage.map((resident) => (<ResidentCard key={resident} residentUrl = {resident} />
        ))}
    </section>

    <Pagination pages = {pages} setCurrentPage ={setCurrentPage} currentPage = {currentPage}/>
 </section>
  )
}
export default ResidentList