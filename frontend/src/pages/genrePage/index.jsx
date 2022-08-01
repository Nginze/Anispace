import Filter from "./components/Filter"
import AnimeBox from "containers/AnimeBox"
import { useState } from "react"
import useGenreFilter from "./hooks/useGenreFilter"
const Index = () => {
  const [selectedGenre, setGenre] = useState("action")
  const {listLoading, animeList} = useGenreFilter(selectedGenre)
  return (
    <div className="w-4/5 m-auto">
        <Filter setGenre = {setGenre}/>
        <AnimeBox loading = {listLoading} animeList={animeList}/>
    </div>
  )
}

export default Index