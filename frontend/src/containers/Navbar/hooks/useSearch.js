import { GogoClient } from "services/GogoClient";
const { useQuery } = require("@tanstack/react-query");

const useSearch = (searchQuery) => {
    const getSearchResults = async ({searchQuery}) => {
        const {data} = await GogoClient.get(`/api/s/search?keyw=${searchQuery}`)
        return data
    }
    const {data: searchResults, isLoading: searchIsLoading} = useQuery(["searchResults", searchQuery], () => getSearchResults({searchQuery}))
    return {searchResults, searchIsLoading}
};

export default useSearch ;
