import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchBar from "./components/SearchBar/searchbar";
import VideoList from "./components/VideoList/video_list";

function App({ youtube }) {
  //비디오 데이터 저장할 공간
  const [videos, setVideos] = useState([]);
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
      .then(videos => setVideos(videos));
  };

  return (
    <>
      <div className={styles.app}>
        <SearchBar onSearch={onSearch} />
        <VideoList videos={videos} />
      </div>
    </>
  );
}

export default App;
