import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchBar from "./components/SearchBar/searchbar";
import VideoDetail from "./components/VideoDetail/video_detail";
import VideoList from "./components/VideoList/video_list";

function App({ youtube }) {
  //비디오 데이터 저장할 공간
  const [videos, setVideos] = useState([]);
  //선택된 비디오
  const [selected, setSelected] = useState(null);
  // 마운트 / 업데이트 시  비디오 셋팅
  useEffect(() => {
    youtube //
      .mostPopular()
      .then((videos) => setVideos(videos));
    //마운트가 되었을때만
  }, []);

  const onSearch = (query) => {
    youtube //
      .search(query)
      .then((videos) => {
        setVideos(videos);
        setSelected(null);
      });
  };

  const selectedVideo = (video) => {
    setSelected(video);
  };

  return (
    <>
      <div className={styles.app}>
        <SearchBar onSearch={onSearch} />
        <section className={styles.content}>
          {selected && (
            <div className={styles.detail}>
              <VideoDetail video={selected} />
            </div>
          )}
          <div className={styles.list}>
            {/* prop을 이용한 css */}
            <VideoList
              videos={videos}
              onVideoClick={selectedVideo}
              display={selected ? "list" : "grid"}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
