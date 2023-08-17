const Pagination = ({pages, setCurrentPage, currentPage}) => {
  return (
    <ul className=" grid grid-flow-col gap-5 justify-center p-10 text-green-500" >
    {
    pages.map((page) => <button><li className={`${currentPage === page && " text-red-500 h-10 flex items-center justify-center aspect-square bg-green-500/30 border-2 border-green-800"}`} onClick={() => setCurrentPage(page)} key={page}>{page}</li></button>
    
    )}

   
    </ul>
  )
}
export default Pagination