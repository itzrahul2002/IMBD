import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import genreids from '../../Utility/Genre'

// import poster1 from "../../assets/action_clapperboard_film_movie_clapper-1024.webp";
const Watchlist = ({ watchlist, setwatchlist, handelRemovefromWatchlist}) => {
  const [Search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setCurrGenre] = useState('All Genres')

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter =(genre)=>{
    setCurrGenre(genre);
  }

  let sortIncreasing = () =>{
      let sortedIncreasing = watchlist.sort((movieA , movieB) =>{
        return movieA.vote_average - movieB.vote_average
      })
      setwatchlist([...sortedIncreasing])
  }

  let sortDecreasing = () =>{
      let sortedDecreasing = watchlist.sort((movieA , movieB) =>{
        return movieB.vote_average - movieA.vote_average
      })
      setwatchlist([...sortedDecreasing])
  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return(
        genreids[movieObj.genre_ids[0]]
      )
    })
    temp = new Set(temp)
    setGenreList(['All Genres', ...temp])
    console.log(temp);
  },[watchlist])

  
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {
          genreList.map((genre)=>{
             return <div onClick={()=>handleFilter(genre)}className={currGenre ==genre ? "flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold bg-blue-400 items-center mx-4":'flex justify-center h-[3rem] w-[9rem] rounded-xl text-white font-bold bg-gray-400 items-center mx-4' }>
            {genre}
          </div>
          })
        }
      
      </div>

      <div className="flex justify-center my-4">
        <input
          type="text"
          name=""
          placeholder="Search for movies..."
          onChange={handleSearch}
          value={Search}
          className="h-[3rem] w-[18rem] bg-gray-200 outline-none px-4"
        />
      </div>

      <div className="border border-gray-200 m-8 overflow-hidden rounded-lg">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <div className="flex justify-center">
                <FaArrowUp className="mt-3 cursor-pointer" onClick={sortIncreasing} />
                <th className="p-2">Ratings</th>
                <FaArrowDown className="mt-3 cursor-pointer" onClick={sortDecreasing} />
              </div>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movieObj)=>{
                if(currGenre == 'All Genres'){
                  return true
                }
                else{
                  return genreids[movieObj.genre_ids[0]]==currGenre;
                }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(Search.toLocaleLowerCase());
              })
              .map((movieObj, index) => {
                return (
                  <tr className="border-b-2" key={index}>
                    <td className="flex items-center px-6 py-4">
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movieObj.backdrop_path}`}
                        alt=""
                        className="h-[6rem] w-[10rem]"
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>

                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td onClick={()=>handelRemovefromWatchlist(movieObj)} className="text-red-800">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
