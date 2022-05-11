
import {useEffect, useState} from 'react';
import "./app.css";
import VideoList from './components/VideoList/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };


    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBTe9WDB5KvuVePwD-jeOp2tSWXBpVjN1E",
      requestOptions
    )
    //text -> json
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));

    return () => {
      
    };
  }, []);

  return <VideoList videos = {videos}/>
}

export default App;
