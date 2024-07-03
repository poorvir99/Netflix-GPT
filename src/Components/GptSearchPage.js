import { BG_PIC } from "../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage=()=>{
    return(
        <div>
            <div className="absolute -z-20 bg-gradient-to-b from-black to-[#000000]">
            <img className=" h-full w-screen object-cover opacity-40" 
            src={BG_PIC} alt="bg-img"/>
        </div>
            <GptSearchBar/>
            <GptMovieSuggestions/>
        </div>
    )
}

export default GptSearchPage;