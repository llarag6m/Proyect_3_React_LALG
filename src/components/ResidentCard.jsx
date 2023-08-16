import axios from "axios"
import { useEffect, useState } from "react"

const ResidentCard = ({residentUrl}) => {
    const [residentInfo, setResidentInfo] = useState(null)

    const residentStatus = {
        Alive: "bg-green-500",
        Dead: "bg-red-500",
        unknown: "bg-slate-500"
    }
  useEffect(() => {
    axios
        .get(residentUrl)
        .then(({data}) => setResidentInfo(data))
        .catch((err) => console.log(err))
  
  }, [])
  

  return (
    <article className="border-solid border-2 border-green-500 overflow-hidden h-[640px] w-[400px] ">
        <header className = " border-solid border-2 border-green-500 " >
            <img className="object-cover object-center overflow-hidden w-full " src={residentInfo?.image} alt="" />
            <div className=" items-center gap-1 p-2  flex justify-center">
                <div className={`h-[10px] aspect-square rounded-full flex items-center  ${residentStatus[residentInfo?.status]}`}></div>
                {residentInfo?.status}
            </div>
        </header>

        <section className="p-2 py-8">
            <h3 className="font-bold text-[26px] text-center">{residentInfo?.name}</h3>
            <ol>
                <li className="font-medium text-[16px] text-gray-400 font-fira flex justify-around">Species: <span className=" font-semibold text-[16px] text-white font-fira ">{residentInfo?.species}</span></li>
                <li className="font-medium text-[16px] text-gray-400 font-fira flex justify-around" font-fira>Origin: <span className=" font-semibold text-[16px] text-white font-fira">{residentInfo?.origin.name}</span></li>
                <li className="font-medium text-[16px] text-gray-400 font-fira flex justify-around">Times appear: <span className=" font-semibold text-[16px] text-white font-fira">{residentInfo?.episode.length }</span> </li>
            </ol>
        </section>

    </article>
  )
}
export default ResidentCard