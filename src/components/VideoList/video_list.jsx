import React from "react";
import VideoItem from "../VideoItem/video_item";
import styles from './video_list.module.css'


export default function VideoList({videos, onVideoClick, display}) {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} onVideoClick={onVideoClick} display={display}/>
      ))}
    </ul>
  );
}
