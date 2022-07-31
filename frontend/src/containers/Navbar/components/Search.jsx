import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Ring } from "@uiball/loaders";
import useSearch from "../hooks/useSearch";
import SearchResultsContainer from "./SearchResultsContainer";

const Search = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const { searchResults, searchIsLoading } = useSearch(searchQuery);
  return (
    <div className="w-72 mr-8  relative">
      <form className="w-full relative">
        {searchIsLoading && (
          <div className="absolute right-3 top-3">
            <Ring size={20} lineWeight={5} speed={2} color="white" />
          </div>
        )}
        <input
          value={searchQuery}
          onChange={e => {
            setSearchQuery(e.target.value);
            queryClient.invalidateQueries(["searchResults"]);
          }}
          className="p-[9px] pl-5 w-full bg-transparent border border-[#3a3939] rounded"
          placeholder="search..."
        />
      </form>
      <SearchResultsContainer searchResults={searchResults} />
    </div>
  );
};

export default Search;
