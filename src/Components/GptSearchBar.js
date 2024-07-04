import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';

const GptSearchBar = () => {

    const searchText=useRef(null);
    

   const langKey=useSelector((store)=>store.config.lang)

   const handleGptSearchClick=async()=>{
    console.log(searchText.current.value);
    //make an API Call to GPT API and get movie results
    const gptQuery=("Act as a movie recommendation system and suggest some  good movies according to the given query:"
        +  searchText.current.value +
        " Only give me names of 10 movies comma seperated for example Aashiqui2,Raazi,Shershah,URI,Goalmaal,La La Land,Me Before You,20th century Girl,Inside Out")

    const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices);
   }

  return (
    <div className='pt-[10%] flex justify-center'>

   <form className='bg-black w-1/2 grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}> 

    <input 
    ref={searchText}
        type="text" 
        className='p-4 m-4  col-span-9' 
        placeholder={lang[langKey].gptSearchPlaceholder}>
    </input>

    <button className='py-2 px-4 m-4 bg-[#E50914]  col-span-3 rounded-lg text-white' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
   </form>


    </div> 
  )
}

export default GptSearchBar;
