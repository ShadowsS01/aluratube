import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { supabase } from "../utils/supabaseClient";

import type { PlaylistProps } from "../utils/types";

import { Timeline } from "../components/Timeline";
import { Video } from "../components/Video";
import { Header } from "../components/Header";
import { videoService } from "../services/videoService";
import { Menu } from "../components/Menu";

export default function Home() {
  const router = useRouter();
  const service = videoService.getAllVideos();

  const [searchValue, setSearchValue] = useState("");
  const [playlists, setPlaylists] = useState<PlaylistProps>({
    playlists: {},
  });
  const [isShowingAVideo, setIsShowingAVideo] = useState(false);

  const { v: videoId } = router.query;

  useEffect(() => {
    const getVideos = () =>
      service.then(({ data }) => {
        const novasPlaylists: PlaylistProps = {
          playlists: {},
        };

        if (data) {
          data.forEach((video) => {
            if (!novasPlaylists.playlists[video.playlist])
              novasPlaylists.playlists[video.playlist] = [];
            novasPlaylists.playlists[video.playlist] = [
              video,
              ...novasPlaylists.playlists[video.playlist],
            ];
          });

          setPlaylists(novasPlaylists);
        }
      });

    if (videoId) {
      setIsShowingAVideo(true);
    } else {
      setIsShowingAVideo(false);
      getVideos();
    }

    const subscription = supabase
      .channel("videos")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "videos",
        },
        (payload) => {
          getVideos();
          // const playlistRealtime = { ...playlists };

          // if (!playlistRealtime[payload.new.playlist]) {
          //   playlistRealtime[payload.new.playlist] = [];
          // }
          // playlistRealtime[payload.new.playlist] = [
          //   payload.new,
          //   ...playlistRealtime[payload.new.playlist],
          // ];

          // setPlaylists(playlistRealtime);
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [videoId]);

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
      <Menu searchValue={searchValue} setSearchValue={setSearchValue} />
      <Header />
      {isShowingAVideo && videoId ? (
        <Video videoId={videoId} />
      ) : (
        <Timeline searchValue={searchValue} propriedades={playlists}>
          Conteúdo
        </Timeline>
      )}
    </div>
  );
}
