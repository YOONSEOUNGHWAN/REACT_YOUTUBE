import { useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchBar from "./components/SearchBar/searchbar";
import VideoList from "./components/VideoList/video_list";

function App() {
  //비디오 데이터 저장할 공간
  const [videos, setVideos] = useState([]);
  // 마운트 / 업데이트 시  비디오 셋팅
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBTe9WDB5KvuVePwD-jeOp2tSWXBpVjN1E",
      requestOptions
    )
      //text -> json fetch 필수 작업
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((response) => setVideos(response.items))
      .catch((error) => console.log("error", error));

    return () => {};
    //마운트가 되었을때만
  }, []);

  const onSearch = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBTe9WDB5KvuVePwD-jeOp2tSWXBpVjN1E`,
      requestOptions
    )
      .then((response) => response.json())
      // 기존 정보 유지하면서 id값만 바꾸준다
      .then((result) => result.items.map(item => ({...item, id:item.id.videoId})))
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
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
