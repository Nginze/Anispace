import { useQuery } from "@tanstack/react-query";
import { GogoClient } from "services/GogoClient";

const useGetVideoSrc = episodeId => {

  const getVideoSrcListVidcdn = async ({ episodeId }) => {
    const { data } = await GogoClient.get(`/vidcdn/watch/${episodeId}`);
    return data;
  };
  const getVideoSrcListStreamSb = async ({ episodeId }) => {
    const { data } = await GogoClient.get(`/streamsb/watch/${episodeId}`);
    return data;
  };

  const getVideoSrcListFembed = async ({ episodeId }) => {
    const { data } = await GogoClient.get(`/fembed/watch/${episodeId}`);
    return data;
  };
  const { data: vidSrcListStreamSb } = useQuery(
    ["vidSrcListStreamSb", episodeId],
    () => getVideoSrcListStreamSb({ episodeId }),{
      refetchOnMount: false,
      refetchOnReconnect: false
    }
    
  );
  const { data: vidSrcListVidcdn } = useQuery(
    ["videSrcListvidcdn", episodeId],
    () => getVideoSrcListVidcdn({ episodeId }),{
      refetchOnMount: false,
      refetchOnReconnect: false
    }
  );

  const { data: vidSrcListFembed } = useQuery(
    ["vidSrcListFembed", episodeId],
    () => getVideoSrcListFembed({ episodeId }),{
      refetchOnMount: false,
      refetchOnReconnect: false
    }
    
  );
  return { vidSrcListStreamSb, vidSrcListVidcdn, vidSrcListFembed };
};

export default useGetVideoSrc;
