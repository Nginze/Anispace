import Filter from "./components/Filter"
import AnimeBox from "containers/AnimeBox"

const Index = () => {
  return (
    <div className="w-3/4 m-auto">
        <Filter/>
        <AnimeBox/>
    </div>
  )
}

export default Index