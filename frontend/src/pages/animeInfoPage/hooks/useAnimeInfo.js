const { useQuery } = require("@tanstack/react-query");
const { default: axios } = require("axios");

const useAnimeInfo = (keyword) => {
  const GogoClient = axios.create({
    baseURL: "http://localhost:5000",
  });
  const getAnimeInfo = async ({keyword}) => {
    const { data } = await GogoClient.get(`/animeMeta?q=${keyword}`);
    return data
  };
  const {data: animeInfo} = useQuery(["AnimeInfo", keyword ], () => getAnimeInfo({keyword}))
  return {animeInfo}
};

export default useAnimeInfo;
