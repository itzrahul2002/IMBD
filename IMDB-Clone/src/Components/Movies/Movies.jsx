import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

const Movies = ({handelAddtoWatchlist, handelRemovefromWatchlist, watchlist}) => {
  const [movies, setmovies] = useState([])
  const [pageNo, setpageNo] = useState(1);

  const handlePrev = ()=>{
    if(pageNo == 1){
      setpageNo(pageNo);
    }
    else{
      setpageNo(pageNo-1);
    }
  }
  const handleNex = ()=>{
    setpageNo(pageNo+1);
  }


  useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=0e604da50769dbe16199054fff074666&language=en-US&page=${pageNo}`)
       .then(function(res){
           setmovies(res.data.results);
       })
  },[pageNo])




  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center m-5'>Trending Movies</div>
      <div className='flex flex-row flex-wrap justify-around gap-8'>
          {
              movies.map((movieObj)=>{
                  return(
                      <MovieCard key={movieObj.id} poster_path={movieObj.poster_path}  movieObj={movieObj} name={movieObj.original_title}  handelAddtoWatchlist={handelAddtoWatchlist} handelRemovefromWatchlist={handelRemovefromWatchlist} watchlist={watchlist}/>
                  )
              })
          }
      </div>
      <Pagination pageNo={pageNo} handleNex={handleNex} handlePrev={handlePrev}/>
    </div>
  );
};

export default Movies;

// https://api.themoviedb.org/3/movie/popular?api_key=0e604da50769dbe16199054fff074666&language=en-US&page=2
