import React from "react";
import VideoItem from "../VideoItem/video_item";
import styles from './video_list.module.css'


export default function VideoList(props) {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        <VideoItem video={video} key={video.id} />
      ))}
    </ul>
  );
}
