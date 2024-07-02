import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlay } from '@fortawesome/free-solid-svg-icons'


const VideoTitle=({title,overview})=>{
    return(
        <div className="my-0 w-screen aspect-video pt-[180px] px-[36px] absolute bg-gradient-to-r from-black">
         <h1 className="text-6xl font-bold text-white">{title}</h1>
         <p className="py-[15px] w-1/3 text-white">{overview}</p>
         <div className="">
            <button className="mr-[15px] py-[7px] px-[20px] rounded-sm bg-white hover:bg-[rgb(217,217,216)] text-black font-bold text-sm">

            <FontAwesomeIcon icon={faPlay} className="mr-[9px] text-lg"/>
                Play  
            </button>
            <button className="py-[7px] px-[20px] rounded-sm bg-[rgb(158,156,156)] bg-opacity-40  text-white font-medium text-sm">
            <FontAwesomeIcon icon={faInfoCircle} className="mr-[9px] text-lg"/> 
                More Info
             </button>

            

         </div>
        </div>
    )
}

export default VideoTitle;