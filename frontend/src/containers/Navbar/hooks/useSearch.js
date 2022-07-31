import { GogoClient } from "services/GogoClient";
const { useQuery } = require("@tanstack/react-query");

const useSearch = (searchQuery) => {
    const getSearchResults = async ({searchQuery}) => {
        const {data} = await GogoClient.get(`/search?keyw=${searchQuery}`)
        return data
    }
    const {data: searchResults} = useQuery(["searchResults", searchQuery], () => getSearchResults({searchQuery}))
    return {searchResults}
};

export default useSearch ;
