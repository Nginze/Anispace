import SearchResult from "./SearchResult";

const SearchResultsContainer = ({ searchResults }) => {
  return (
    <div className="w-full max-w-full flex flex-col items-center absolute z-50">
      {searchResults?.slice(0, 4).map(result => (
        <SearchResult
          animeId={result.animeId}
          animeImg={result.animeImg}
          title={result.animeTitle}
          status={result.status}
        />
      ))}
    </div>
  );
};

export default SearchResultsContainer;
