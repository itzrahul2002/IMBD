
import { BrowserRouter, json, Route, Routes } from 'react-router-dom'
import './App.css'
import Movies from './Components/Movies/Movies'
import Navbar from './Components/Navbar/Navbar'
import Watchlist from './Components/Watchlist/Watchlist'
import Banner from './Components/Movies/Banner'
import Temp from './Components/Temp'
import { useEffect, useState } from 'react'

function App() {

  let [watchlist, setwatchlist] = useState([])

  let handelAddtoWatchlist = (movieobj) =>{
      let newwatchlist = [...watchlist, movieobj]
      localStorage.setItem('movieApp', JSON.stringify(newwatchlist))
      setwatchlist(newwatchlist)
      console.log(newwatchlist);
  }

  let handelRemovefromWatchlist = (movieobj) =>{
       let filterwatchlist = watchlist.filter((movie)=>{
            return movie.id != movieobj.id
       })
       setwatchlist(filterwatchlist)
       localStorage.setItem('movieApp', JSON.stringify(filterwatchlist))
       console.log(filterwatchlist);
  }
  
  useEffect(()=>{
      let moviesfromLocalStorage = localStorage.getItem('movieApp')
      if(!moviesfromLocalStorage){
         return
      }
      setwatchlist(JSON.parse(moviesfromLocalStorage))
  },[])


  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
              <Route path='/' element={<><Banner/><Movies handelAddtoWatchlist={handelAddtoWatchlist} handelRemovefromWatchlist={handelRemovefromWatchlist} watchlist={watchlist}/></>}/>
              <Route path='/watchlist' element={<Watchlist watchlist={watchlist} setwatchlist={setwatchlist} handelRemovefromWatchlist={handelRemovefromWatchlist}/>}/>
              <Route path='/temp' element={<Temp/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
