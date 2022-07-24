import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetVideoSrc = episodeId => {
  const GogoClient = axios.create({
    baseURL: "http://localhost:5000",
  });
  const getVideoSrcList = async ({ episodeId }) => {
    const { data } = await GogoClient.get(`/vidcdn/watch/${episodeId}`);
    return data;
  };

  const { data: videoSrcList } = useQuery(["videSrcList", episodeId], () =>
    getVideoSrcList({ episodeId })
  );
  return { videoSrcList };
};

export default useGetVideoSrc;
